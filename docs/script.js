// إعدادات الوضع
let mode = localStorage.getItem('themeMode') || 'light';
applyTheme(mode);

// زر تغيير الوضع
document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light';
  mode = next;
  localStorage.setItem('themeMode', mode);
  applyTheme(mode);
});

// تطبيق الوضع حسب الاختيار
function applyTheme(selected) {
  const hour = new Date().getHours();
  const isDark = selected === 'dark' || (selected === 'auto' && (hour >= 19 || hour < 6));
  document.body.classList.toggle('dark-mode', isDark);
}

// التحليل الفوري
const input = document.getElementById('content-input');
const output = document.getElementById('analysis-output');

input.addEventListener('input', () => {
  const text = input.value.trim();
  if (!text) {
    output.innerHTML = 'ابدأ الكتابة لعرض التحليل...';
    return;
  }

  const analysis = analyzeText(text);
  output.innerHTML = `
    <p><strong>نوع المحتوى:</strong> ${analysis.type}</p>
    <p><strong>نبرة النص:</strong> ${analysis.tone}</p>
    <p><strong>ملخص:</strong> ${analysis.summary}</p>
    <p><strong>توصيات:</strong> ${analysis.suggestions.join(', ')}</p>
  `;
});

// دالة تحليل النص
function analyzeText(text) {
  const length = text.length;
  const type = length > 300 ? 'مقال طويل' : length > 100 ? 'نص متوسط' : 'ملاحظة قصيرة';
  const tone = /!|\؟/.test(text) ? 'عاطفي أو تفاعلي' : 'هادئ أو وصفي';
  const summary = text.slice(0, 100) + (length > 100 ? '...' : '');
  const suggestions = [];

  if (!/[.!?]/.test(text)) suggestions.push('أضف علامات ترقيم');
  if (length < 50) suggestions.push('وسّع الفكرة');
  if (/كثير|جداً|تماماً/.test(text)) suggestions.push('قلل التكرار');

  return { type, tone, summary, suggestions };
}
