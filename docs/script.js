`css
/ إعدادات عامة /
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.5s, color 0.5s;
  background: #ffffff;
  color: #222222;
}

/ الوضع الليلي /
body.dark-mode {
  background: #0d0d0d;
  color: #f0f0f0;
}

/ رأس الصفحة /
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/ زر تغيير الوضع /

theme-toggle {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

/ الشعار /

logo-container {
  width: 100px;
  height: 100px;
}

/ المحرر /

content-input {
  width: 90%;
  height: 150px;
  margin: 1rem auto;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: vertical;
}

/ نافذة التحليل /

analysis-panel {
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #e0f7fa, #fce4ec);
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

body.dark-mode #analysis-panel {
  background: linear-gradient(135deg, #1a237e, #4a148c);
  color: #fff;
}

/ مظهر متجاوب /
@media (max-width: 600px) {

content-input, #analysis-panel {
    width: 95%;
  }
}
`
