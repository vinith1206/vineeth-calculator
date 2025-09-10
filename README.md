# 🧮 Vineeth Calculator

A beautiful iPhone-style calculator built with Flask and vanilla JavaScript. Features a sleek black design with white text, circular buttons, and smooth animations that replicate the iOS calculator experience.

![Calculator Preview](https://via.placeholder.com/400x600/000000/FFFFFF?text=Vineeth+Calculator)

## ✨ Features

- **iPhone-Style Design**: Black background with white text and circular buttons
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Button press animations and hover effects
- **Full Functionality**: All basic calculator operations (+, -, ×, ÷)
- **Special Functions**: Clear (C), Plus/Minus (±), Percentage (%)
- **Keyboard Support**: Full keyboard input support
- **Modern UI**: SF Pro Display font and iOS-inspired styling

## 🚀 Live Demo

[Deploy on Railway](https://railway.app) | [Deploy on Render](https://render.com) | [Deploy on Heroku](https://heroku.com)

## 🛠️ Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Styling**: Custom CSS with iPhone-inspired design
- **Font**: SF Pro Display (Apple's system font)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/vineeth-calculator.git
   cd vineeth-calculator
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎯 Usage

### Basic Operations
- **Numbers**: Click number buttons (0-9) or use keyboard
- **Operators**: Click +, -, ×, ÷ buttons or use keyboard
- **Equals**: Click = button or press Enter
- **Clear**: Click C button or press Escape

### Special Functions
- **Plus/Minus (±)**: Toggle positive/negative
- **Percentage (%)**: Convert to percentage (÷ 100)
- **Decimal**: Add decimal point

### Keyboard Shortcuts
- `0-9`: Number input
- `+`, `-`, `*`, `/`: Operators
- `Enter` or `=`: Calculate
- `Escape`: Clear all
- `Backspace`: Delete last digit
- `.`: Decimal point

## 🎨 Design Features

- **Color Scheme**: Black background (#000) with white text (#fff)
- **Button Colors**:
  - Numbers: Dark gray (#333)
  - Operators: Orange (#ff9500)
  - Functions: Light gray (#a6a6a6)
- **Typography**: SF Pro Display font family
- **Animations**: Scale effect on button press
- **Responsive**: Adapts to different screen sizes

## 📱 Mobile Support

The calculator is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Deployment

### Railway (Recommended)
1. Connect your GitHub repository to Railway
2. Railway will automatically detect Flask and deploy
3. Your app will be live at `https://your-app.railway.app`

### Render
1. Connect your GitHub repository to Render
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `python app.py`
4. Deploy!

### Heroku
1. Install Heroku CLI
2. Create a `Procfile`: `web: python app.py`
3. Deploy: `git push heroku main`

## 📁 Project Structure

```
vineeth-calculator/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css     # iPhone-style CSS
│   └── js/
│       └── script.js     # Calculator logic
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vineeth**
- Email: vinith12063@gmail.com
## 🙏 Acknowledgments

- Inspired by Apple's iOS Calculator design
- Built with Flask and vanilla JavaScript
- Uses SF Pro Display font family

---

⭐ **Star this repository if you like it!**
