




from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import math
from datetime import datetime

app = Flask(__name__)
CORS(app)

class Calculator:
    def __init__(self):
        self.history = []
    
    def calculate(self, expression):
        """Evaluate mathematical expression safely"""
        try:
            # Replace common mathematical functions
            expression = expression.replace('^', '**')
            expression = expression.replace('π', str(math.pi))
            expression = expression.replace('e', str(math.e))
            
            # Allowed functions and constants
            allowed_names = {
                'sin': math.sin,
                'cos': math.cos,
                'tan': math.tan,
                'log': math.log,
                'log10': math.log10,
                'sqrt': math.sqrt,
                'abs': abs,
                'ceil': math.ceil,
                'floor': math.floor,
                'pi': math.pi,
                'e': math.e,
                'pow': pow,
                'max': max,
                'min': min,
            }
            
            # Compile the expression
            code = compile(expression, '<string>', 'eval')
            
            # Check for allowed names only
            for name in code.co_names:
                if name not in allowed_names:
                    raise ValueError(f"Use of '{name}' is not allowed")
            
            result = eval(code, {"__builtins__": {}}, allowed_names)
            
            # Add to history
            self.history.append({
                'expression': expression,
                'result': result,
                'timestamp': str(datetime.now())
            })
            
            # Keep only last 50 calculations
            if len(self.history) > 50:
                self.history = self.history[-50:]
            
            return result
            
        except Exception as e:
            raise ValueError(f"Invalid expression: {str(e)}")

calculator = Calculator()

@app.route('/')
def index():
    """Serve the calculator frontend"""
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    """Calculate mathematical expression"""
    try:
        data = request.get_json()
        expression = data.get('expression', '')
        
        if not expression:
            return jsonify({'error': 'No expression provided'}), 400
        
        result = calculator.calculate(expression)
        return jsonify({'result': result, 'expression': expression})
        
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': 'Calculation failed'}), 500

@app.route('/history', methods=['GET'])
def get_history():
    """Get calculation history"""
    return jsonify({'history': calculator.history})

@app.route('/clear_history', methods=['POST'])
def clear_history():
    """Clear calculation history"""
    calculator.history = []
    return jsonify({'message': 'History cleared'})

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_ENV') == 'development'
    app.run(debug=debug, host='0.0.0.0', port=port)
