// ==========================================================================
// AI Course Finder — Global functions
// ==========================================================================

function openAI() {
    document.getElementById('aiModal').classList.add('show');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('aiInput').focus(), 100);
}

function closeAI() {
    document.getElementById('aiModal').classList.remove('show');
    document.body.style.overflow = '';
}

function aiAsk(text) {
    document.getElementById('aiInput').value = text;
    aiSend();
}

function aiSend() {
    var input = document.getElementById('aiInput');
    var text = input.value.trim();
    if (!text) return;
    input.value = '';

    var msgs = document.getElementById('aiMessages');
    msgs.innerHTML += '<div class="ai-msg user">' + text + '</div>';
    msgs.innerHTML += '<div class="ai-typing" id="aiTyping"><span></span><span></span><span></span></div>';
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(function() {
        var typing = document.getElementById('aiTyping');
        if (typing) typing.remove();

        var results = aiMatch(text);
        var reply = '';

        if (results.length > 0) {
            reply = 'จากสิ่งที่คุณสนใจ ผมแนะนำคอร์สเหล่านี้ครับ:<br>';
            results.forEach(function(c) {
                var owned = isPurchased(c.id);
                var badge = owned ? '<span style="color:#30d158;font-size:.65rem;font-weight:600"> ✓ ซื้อแล้ว</span>' : '';
                reply += '<a href="course-detail.html?id=' + c.id + '" class="ai-course">' +
                    '<img src="' + c.img + '" alt="' + c.title + '">' +
                    '<div class="ai-course-info">' +
                    '<div class="ai-course-name">' + c.title + badge + '</div>' +
                    '<div class="ai-course-meta">' + c.cat + ' • ' + c.hours + ' ชม. • ฿' + c.price.toLocaleString() + '</div>' +
                    '</div></a>';
            });
            reply += '<br>กดที่คอร์สเพื่อดูรายละเอียดเพิ่มเติมได้เลยครับ 😊';
        } else {
            reply = 'ขออภัยครับ ผมไม่พบคอร์สที่ตรงกับ "' + text + '" โดยตรง<br><br>' +
                'ลองถามใหม่ เช่น "การตลาด", "แบรนด์", "AI", "วิดีโอ", "กลยุทธ์" หรือ "อีเมล" ครับ<br><br>' +
                'หรือ <a href="contact.html">ติดต่อทีมเรา</a> เพื่อขอคำแนะนำเพิ่มเติม';
        }

        msgs.innerHTML += '<div class="ai-msg bot">' + reply + '</div>';
        msgs.scrollTop = msgs.scrollHeight;
    }, 1200 + Math.random() * 800);
}

function aiMatch(query) {
    var q = query.toLowerCase();
    var keywords = {
        'performance-marketing': ['marketing', 'โฆษณา', 'ads', 'facebook', 'tiktok', 'google', 'ยิงแอด', 'performance', 'การตลาด', 'ขาย', 'โปรโมท', 'digital', 'ดิจิทัล', 'ออนไลน์'],
        'brand-building': ['brand', 'แบรนด์', 'branding', 'ตัวตน', 'identity', 'โลโก้', 'logo', 'สร้างแบรนด์', 'ภาพลักษณ์', 'dna', 'positioning'],
        'ai-marketing': ['ai', 'เอไอ', 'chatgpt', 'automation', 'ออโต', 'อัตโนมัติ', 'midjourney', 'ปัญญาประดิษฐ์', 'prompt', 'เทคโนโลยี'],
        'short-video': ['video', 'วิดีโอ', 'คลิป', 'tiktok', 'reels', 'shorts', 'ถ่าย', 'ตัดต่อ', 'คลิปสั้น', 'viral', 'ไวรัล', 'capcut'],
        'strategic-planning': ['strategy', 'กลยุทธ์', 'แผน', 'planning', 'วางแผน', 'research', 'วิจัย', 'คู่แข่ง', 'swot', 'growth', 'เติบโต', 'ธุรกิจ'],
        'email-marketing': ['email', 'อีเมล', 'edm', 'newsletter', 'mailchimp', 'ส่งเมล', 'จดหมาย']
    };

    var scores = {};
    Object.keys(keywords).forEach(function(id) {
        scores[id] = 0;
        keywords[id].forEach(function(kw) { if (q.indexOf(kw) !== -1) scores[id] += 2; });
        var c = COURSES[id];
        if (c.title.toLowerCase().indexOf(q) !== -1 || c.desc.toLowerCase().indexOf(q) !== -1) scores[id] += 3;
        if (c.cat.toLowerCase().indexOf(q) !== -1) scores[id] += 2;
    });

    if (Object.values(scores).every(function(s) { return s === 0; })) {
        Object.keys(keywords).forEach(function(id) {
            keywords[id].forEach(function(kw) {
                if (kw.indexOf(q) !== -1 || q.indexOf(kw.substring(0, 3)) !== -1) scores[id] += 1;
            });
        });
    }

    return Object.entries(scores)
        .filter(function(e) { return e[1] > 0; })
        .sort(function(a, b) { return b[1] - a[1]; })
        .slice(0, 3)
        .map(function(e) { return COURSES[e[0]]; });
}

// Init when DOM ready
document.addEventListener('DOMContentLoaded', function() {
    var finderBtn = document.getElementById('aiFinderBtn');
    if (finderBtn) finderBtn.addEventListener('click', openAI);

    var modal = document.getElementById('aiModal');
    if (modal) modal.addEventListener('click', function(e) { if (e.target === e.currentTarget) closeAI(); });
});
