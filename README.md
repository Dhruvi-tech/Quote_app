
<h1 align="center">
  🌸  Quote App 🎌
</h1>


<p align="center">
  ✨ Built using <b>Flask</b> 🐍, <b>HTML</b>, <b>CSS</b> & <b>JavaScript</b>, and ready for deployment 🚀
</p>

---

## 🌟 Features

- 🎭 **Random Anime Quotes** on every click
- 🎨 **Custom Styled Interface** for a clean, vibrant look
- ⚡ **Responsive UI** with JavaScript magic
- 🐳 **Docker-ready** and deployable to Google Cloud or other platforms

---

## 🧠 Preview

> _"Power comes in response to a need, not a desire."_  
> — Goku, Dragon Ball Z
---

## 🗂️ Folder Structure

```bash
Anime_Quote_App/
├── app.py               # Main Flask app
├── quotes.py            # Anime quotes storage
├── requirements.txt     # Python dependencies
├── Dockerfile           # Docker setup
├── app.yaml             # GCP config
│
├── static/
│   ├── style.css        # Stylesheet
│   └── scripts.js       # JS for animations
│
└── templates/
    └── index.html       # Frontend template
```

---

## 💻 Run Locally

Clone this repo and get started instantly:

```bash
git clone https://github.com/Dhruvi-tech/Brainwave_Matrix_Intern.git
cd Brainwave_Matrix_Intern

# Create a virtual environment (optional)
python -m venv venv
source venv/bin/activate  # Use `venv\Scripts\activate` for Windows

# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py
```

## 🐳 Docker Support

Build and run with Docker in two simple steps:

```bash
docker build -t anime-quote-app .
docker run -p 5000:5000 anime-quote-app
```

---

## ☁️ Deploy to Google Cloud

Deploy easily using App Engine:

```bash
gcloud app deploy
```

> Make sure your project and billing are set up on GCP!

---


---

## 🧑‍💻 Contributing

Got a cool idea or found a bug?  
Contributions are more than welcome! Just fork the repo and create a pull request.

---

<h3 align="center">Built with 💖 by <a href="https://github.com/dhruvi-tech">Dhruvi Mittal/a></h3>
<p align="center"><i>"Believe in yourself, not in the you who believes in me!" – Kamina</i></p>
