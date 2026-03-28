// ==========================================================================
// Course Data — Shared across all pages
// ==========================================================================
const COURSES = {
    'performance-marketing': {
        id: 'performance-marketing',
        title: 'Performance Marketing Mastery 2026',
        cat: 'Marketing',
        catKey: 'marketing',
        level: 'Beginner',
        levelClass: 'beg',
        hours: 12,
        modules: 10,
        students: 2450,
        rating: 4.8,
        reviews: 512,
        price: 5900,
        oldPrice: 9900,
        img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
        desc: 'เจาะลึกการยิงโฆษณา Facebook, TikTok และ Google Ads พร้อมการวิเคราะห์ Data แบบมืออาชีพ เรียนรู้การตั้ง Campaign, A/B Testing, Retargeting และ Conversion Optimization',
        color: '#e63946',
        curriculum: [
            { title: 'Module 1: Digital Marketing Landscape', dur: '45 min', lessons: ['1.1 ภาพรวมการตลาดดิจิทัล 2026', '1.2 เลือก Platform ที่ใช่สำหรับธุรกิจคุณ'] },
            { title: 'Module 2: Facebook & Instagram Ads', dur: '1.5 hrs', lessons: ['2.1 ตั้ง Campaign Structure ที่ถูกต้อง', '2.2 Audience Targeting แบบเจาะลึก', '2.3 Creative ที่ทำให้คนหยุด Scroll'] },
            { title: 'Module 3: TikTok Ads Mastery', dur: '1 hr', lessons: ['3.1 TikTok Ads Manager เบื้องต้น', '3.2 Spark Ads vs In-Feed Ads'] },
            { title: 'Module 4: Google Ads & Search', dur: '1.5 hrs', lessons: ['4.1 Search Ads ที่ได้ผลลัพธ์', '4.2 Display & YouTube Ads'] },
            { title: 'Module 5: A/B Testing & Optimization', dur: '1 hr', lessons: ['5.1 ทดสอบ Creative อย่างเป็นระบบ', '5.2 Landing Page Optimization'] },
            { title: 'Module 6: Retargeting & Funnel', dur: '1 hr', lessons: ['6.1 สร้าง Retargeting Funnel', '6.2 Lookalike Audience'] },
            { title: 'Module 7: Data Analytics & Reporting', dur: '1.5 hrs', lessons: ['7.1 อ่าน Dashboard ให้เป็น', '7.2 สร้าง Report ที่ลูกค้าเข้าใจ'] },
            { title: 'Module 8: Budget Planning', dur: '45 min', lessons: ['8.1 จัดสรรงบโฆษณาอย่างมีประสิทธิภาพ'] },
            { title: 'Module 9: Case Studies', dur: '1 hr', lessons: ['9.1 Case: สร้างยอดขาย 20 ล้านใน 1 ปี', '9.2 Case: Samsung Email Marketing'] },
            { title: 'Module 10: Final Project', dur: '1 hr', lessons: ['10.1 สร้าง Campaign Plan ของคุณเอง'] }
        ]
    },
    'brand-building': {
        id: 'brand-building',
        title: 'Brand Building Blueprint',
        cat: 'Branding',
        catKey: 'branding',
        level: 'Intermediate',
        levelClass: 'int',
        hours: 8,
        modules: 8,
        students: 1200,
        rating: 4.9,
        reviews: 328,
        price: 4500,
        oldPrice: 7900,
        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
        desc: 'สร้างแบรนด์ให้คนจำและยอมจ่ายแพงขึ้น ด้วยกลยุทธ์จิตวิทยาและการออกแบบตัวตน เหมาะสำหรับเจ้าของกิจการและนักการตลาดที่ต้องการยกระดับแบรนด์',
        color: '#ff9f0a',
        curriculum: [
            { title: 'Module 1: Psychology of Branding', dur: '45 min', lessons: ['1.1 ทำความเข้าใจสมองผู้บริโภค', '1.2 Emotional vs Rational Branding'] },
            { title: 'Module 2: Brand Identity & Positioning', dur: '1.5 hrs', lessons: ['2.1 Unique Value Proposition', '2.2 Brand Persona', '2.3 Competitive Positioning Map'] },
            { title: 'Module 3: ขุด Brand DNA', dur: '1 hr', lessons: ['3.1 Brand Archetype Framework', '3.2 Workshop: ค้นหา DNA แบรนด์'] },
            { title: 'Module 4: Visual Identity Design', dur: '1 hr', lessons: ['4.1 Logo, Color, Typography System', '4.2 Brand Guidelines'] },
            { title: 'Module 5: Tone of Voice & Story', dur: '45 min', lessons: ['5.1 สร้าง Brand Voice', '5.2 Storytelling Framework'] },
            { title: 'Module 6: Content Strategy', dur: '1 hr', lessons: ['6.1 Content Pillar', '6.2 Social Media Brand Playbook'] },
            { title: 'Module 7: Brand Performance', dur: '45 min', lessons: ['7.1 KPIs สำหรับวัดผลแบรนด์', '7.2 Brand Health Check'] },
            { title: 'Module 8: Case Studies & Project', dur: '1 hr', lessons: ['8.1 Case Study แบรนด์ไทย', '8.2 Final: สร้าง Brand Book'] }
        ]
    },
    'ai-marketing': {
        id: 'ai-marketing',
        title: 'AI for Marketing Operations',
        cat: 'AI & Automation',
        catKey: 'ai',
        level: 'Professional',
        levelClass: 'pro',
        hours: 15,
        modules: 10,
        students: 890,
        rating: 4.7,
        reviews: 198,
        price: 8900,
        oldPrice: 14900,
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        desc: 'ใช้ AI ช่วยเขียนคอนเทนต์ วิเคราะห์คู่แข่ง สร้างระบบ Automation เต็มรูปแบบ เรียนรู้ ChatGPT, Midjourney, Zapier และเครื่องมือ AI ล่าสุดสำหรับนักการตลาด',
        color: '#bf5af2',
        curriculum: [
            { title: 'Module 1: AI Revolution in Marketing', dur: '1 hr', lessons: ['1.1 ภาพรวม AI ในการตลาด', '1.2 เครื่องมือ AI ที่ต้องรู้จัก'] },
            { title: 'Module 2: ChatGPT for Content', dur: '1.5 hrs', lessons: ['2.1 Prompt Engineering', '2.2 สร้าง Content ด้วย AI', '2.3 AI Copywriting Framework'] },
            { title: 'Module 3: AI Visual & Design', dur: '1.5 hrs', lessons: ['3.1 Midjourney & DALL-E', '3.2 สร้าง Visual Content ด้วย AI'] },
            { title: 'Module 4: AI Analytics', dur: '1 hr', lessons: ['4.1 วิเคราะห์ Data ด้วย AI', '4.2 Predictive Analytics'] },
            { title: 'Module 5: Marketing Automation', dur: '1.5 hrs', lessons: ['5.1 Zapier & Make.com', '5.2 สร้าง Workflow อัตโนมัติ'] },
            { title: 'Module 6: AI Chatbot & CRM', dur: '1 hr', lessons: ['6.1 สร้าง Chatbot ด้วย AI', '6.2 AI-Powered CRM'] },
            { title: 'Module 7: AI for SEO', dur: '1 hr', lessons: ['7.1 AI SEO Tools', '7.2 Content Optimization'] },
            { title: 'Module 8: AI Video & Audio', dur: '1.5 hrs', lessons: ['8.1 AI Video Generation', '8.2 AI Voice & Podcast'] },
            { title: 'Module 9: Ethics & Future', dur: '1 hr', lessons: ['9.1 จริยธรรมการใช้ AI', '9.2 อนาคตของ AI Marketing'] },
            { title: 'Module 10: Final Project', dur: '1.5 hrs', lessons: ['10.1 สร้าง AI Marketing System'] }
        ]
    },
    'short-video': {
        id: 'short-video',
        title: 'Short-form Video for Business',
        cat: 'Video Production',
        catKey: 'video',
        level: 'Beginner',
        levelClass: 'beg',
        hours: 6,
        modules: 6,
        students: 1800,
        rating: 4.8,
        reviews: 420,
        price: 3500,
        oldPrice: 5900,
        img: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=800&q=80',
        desc: 'ถ่ายทำและตัดต่อคลิปสั้นสำหรับ TikTok, Reels และ Shorts แบบมืออาชีพโดยใช้มือถือเครื่องเดียว เรียนรู้เทคนิค Hook, Storytelling และ Editing ที่ทำให้คลิปไวรัล',
        color: '#30d158',
        curriculum: [
            { title: 'Module 1: Short Video Landscape', dur: '45 min', lessons: ['1.1 ทำไม Short Video ถึงสำคัญ', '1.2 Algorithm ของแต่ละ Platform'] },
            { title: 'Module 2: Content Planning', dur: '1 hr', lessons: ['2.1 Content Calendar', '2.2 Hook ที่ทำให้คนหยุดดู', '2.3 Storytelling ใน 60 วินาที'] },
            { title: 'Module 3: ถ่ายทำด้วยมือถือ', dur: '1 hr', lessons: ['3.1 Setup มือถือให้ถ่ายสวย', '3.2 แสง เสียง มุมกล้อง'] },
            { title: 'Module 4: ตัดต่อ CapCut Pro', dur: '1.5 hrs', lessons: ['4.1 CapCut เบื้องต้น', '4.2 Transition & Effect', '4.3 Text & Music'] },
            { title: 'Module 5: Viral Strategy', dur: '1 hr', lessons: ['5.1 Trend Jacking', '5.2 Hashtag Strategy'] },
            { title: 'Module 6: Case Studies & Project', dur: '45 min', lessons: ['6.1 วิเคราะห์คลิปไวรัล', '6.2 สร้างคลิปของคุณเอง'] }
        ]
    },
    'strategic-planning': {
        id: 'strategic-planning',
        title: 'Strategic Marketing Planning',
        cat: 'Strategy',
        catKey: 'strategy',
        level: 'Intermediate',
        levelClass: 'int',
        hours: 10,
        modules: 8,
        students: 650,
        rating: 4.9,
        reviews: 156,
        price: 6500,
        oldPrice: 11900,
        img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        desc: 'วางแผนกลยุทธ์การตลาดระยะยาว Research Winning Zone วิเคราะห์คู่แข่ง หาจุดแข็งของแบรนด์ เหมาะสำหรับ Marketing Manager และเจ้าของธุรกิจ',
        color: '#2997ff',
        curriculum: [
            { title: 'Module 1: Strategic Thinking', dur: '1 hr', lessons: ['1.1 Marketing Strategy vs Tactics', '1.2 Business Model Canvas'] },
            { title: 'Module 2: Market Research', dur: '1.5 hrs', lessons: ['2.1 Research Winning Zone', '2.2 Customer Insight', '2.3 Competitor Analysis'] },
            { title: 'Module 3: SWOT & Positioning', dur: '1 hr', lessons: ['3.1 SWOT Analysis', '3.2 Blue Ocean Strategy'] },
            { title: 'Module 4: Marketing Plan', dur: '1.5 hrs', lessons: ['4.1 สร้าง Marketing Plan', '4.2 Budget Allocation'] },
            { title: 'Module 5: Channel Strategy', dur: '1 hr', lessons: ['5.1 Omnichannel Marketing', '5.2 Online + Offline Integration'] },
            { title: 'Module 6: KPIs & Metrics', dur: '1 hr', lessons: ['6.1 ตั้ง KPIs ที่วัดผลได้', '6.2 Dashboard & Reporting'] },
            { title: 'Module 7: Growth Hacking', dur: '1 hr', lessons: ['7.1 Growth Framework', '7.2 Viral Loop & Referral'] },
            { title: 'Module 8: Final Project', dur: '1 hr', lessons: ['8.1 สร้าง Strategic Plan ของคุณ'] }
        ]
    },
    'email-marketing': {
        id: 'email-marketing',
        title: 'Email Marketing & Automation',
        cat: 'Marketing',
        catKey: 'marketing',
        level: 'Beginner',
        levelClass: 'beg',
        hours: 5,
        modules: 6,
        students: 980,
        rating: 4.7,
        reviews: 210,
        price: 3900,
        oldPrice: 6900,
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=800&q=80',
        desc: 'สร้างระบบ Email Marketing ที่ทำงานอัตโนมัติ เพิ่ม Engagement และ Conversion Rate เรียนรู้ Mailchimp, EDM Design, Segmentation และ A/B Testing',
        color: '#ff6b6b',
        curriculum: [
            { title: 'Module 1: Email Marketing Fundamentals', dur: '45 min', lessons: ['1.1 ทำไม Email ยังสำคัญ', '1.2 Email Marketing Metrics'] },
            { title: 'Module 2: List Building', dur: '1 hr', lessons: ['2.1 สร้าง Email List', '2.2 Lead Magnet Strategy', '2.3 Opt-in Form Design'] },
            { title: 'Module 3: EDM Design', dur: '1 hr', lessons: ['3.1 Email Template Design', '3.2 Mobile-First Email'] },
            { title: 'Module 4: Segmentation & Personalization', dur: '45 min', lessons: ['4.1 Audience Segmentation', '4.2 Dynamic Content'] },
            { title: 'Module 5: Automation Workflows', dur: '1 hr', lessons: ['5.1 Welcome Series', '5.2 Abandoned Cart', '5.3 Re-engagement'] },
            { title: 'Module 6: Analytics & Optimization', dur: '30 min', lessons: ['6.1 A/B Testing', '6.2 Deliverability'] }
        ]
    }
};

// ── Purchase helpers ──
function getPurchased() {
    return JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
}
function isPurchased(id) {
    return getPurchased().includes(id);
}
function purchaseCourse(id) {
    const list = getPurchased();
    if (!list.includes(id)) { list.push(id); localStorage.setItem('purchasedCourses', JSON.stringify(list)); }
}

// ── Completion helpers ──
function getCompleted() {
    return JSON.parse(localStorage.getItem('completedCourses') || '[]');
}
function isCompleted(id) {
    return getCompleted().includes(id);
}
function completeCourse(id) {
    const list = getCompleted();
    if (!list.includes(id)) { list.push(id); localStorage.setItem('completedCourses', JSON.stringify(list)); }
}
function getCompletionDate(id) {
    const dates = JSON.parse(localStorage.getItem('completionDates') || '{}');
    return dates[id] || null;
}
function setCompletionDate(id) {
    const dates = JSON.parse(localStorage.getItem('completionDates') || '{}');
    if (!dates[id]) {
        dates[id] = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
        localStorage.setItem('completionDates', JSON.stringify(dates));
    }
}


// ── Lesson progress helpers ──
function getLessonProgress(courseId) {
    const all = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    return all[courseId] || { current: 0, completed: [] };
}
function saveLessonProgress(courseId, data) {
    const all = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    all[courseId] = data;
    localStorage.setItem('lessonProgress', JSON.stringify(all));
}

// ── Quiz data per course ──
const QUIZZES = {
    'performance-marketing': [
        { module: 0, q: 'แพลตฟอร์มไหนเหมาะกับกลุ่มเป้าหมายอายุ 18-24 ปี?', opts: ['Facebook Ads', 'TikTok Ads', 'LinkedIn Ads', 'Twitter Ads'], ans: 1 },
        { module: 1, q: 'Lookalike Audience ใช้ข้อมูลอะไรเป็นฐาน?', opts: ['อายุและเพศ', 'Custom Audience ที่มีอยู่', 'คำค้นหา', 'ที่อยู่'], ans: 1 },
        { module: 2, q: 'Spark Ads บน TikTok คืออะไร?', opts: ['โฆษณา Banner', 'ใช้คลิป Organic ที่มีอยู่เป็นโฆษณา', 'โฆษณา Pop-up', 'โฆษณาใน Search'], ans: 1 }
    ],
    'brand-building': [
        { module: 0, q: 'Emotional Branding ทำงานกับส่วนไหนของสมอง?', opts: ['Prefrontal Cortex', 'Limbic System', 'Cerebellum', 'Brain Stem'], ans: 1 },
        { module: 1, q: 'UVP ย่อมาจากอะไร?', opts: ['Universal Value Plan', 'Unique Value Proposition', 'User Value Product', 'Unified Vision Protocol'], ans: 1 },
        { module: 2, q: 'Brand Archetype มีกี่แบบตาม Carl Jung?', opts: ['8', '10', '12', '16'], ans: 2 }
    ],
    'ai-marketing': [
        { module: 0, q: 'AI ช่วยนักการตลาดเรื่องอะไรได้มากที่สุด?', opts: ['ทำอาหาร', 'วิเคราะห์ Data และสร้าง Content', 'ซ่อมคอม', 'ออกแบบอาคาร'], ans: 1 },
        { module: 1, q: 'Prompt Engineering คืออะไร?', opts: ['เขียนโค้ด', 'ออกแบบคำสั่งให้ AI ทำงานได้ดี', 'สร้างเว็บ', 'วิเคราะห์การเงิน'], ans: 1 },
        { module: 2, q: 'Midjourney ใช้สำหรับอะไร?', opts: ['เขียนบทความ', 'สร้างรูปภาพด้วย AI', 'วิเคราะห์ข้อมูล', 'ตัดต่อวิดีโอ'], ans: 1 }
    ],
    'short-video': [
        { module: 0, q: 'TikTok Algorithm ให้ความสำคัญกับอะไรมากที่สุด?', opts: ['Follower', 'Watch Time', 'Like', 'ความยาวคลิป'], ans: 1 },
        { module: 1, q: 'Hook ที่ดีควรอยู่ในกี่วินาทีแรก?', opts: ['10 วิ', '5 วิ', '1-3 วิ', '30 วิ'], ans: 2 },
        { module: 2, q: 'Rule of Thirds ใช้สำหรับอะไร?', opts: ['ตัดต่อเสียง', 'จัดองค์ประกอบภาพ', 'เลือกเพลง', 'ตั้งราคา'], ans: 1 }
    ],
    'strategic-planning': [
        { module: 0, q: 'Strategy vs Tactics ต่างกันอย่างไร?', opts: ['ไม่ต่างกัน', 'Strategy=แผนระยะยาว Tactics=ปฏิบัติ', 'Tactics สำคัญกว่า', 'Strategy ใช้เงินมากกว่า'], ans: 1 },
        { module: 1, q: 'Customer Insight คืออะไร?', opts: ['ยอดขาย', 'ความเข้าใจลึกเกี่ยวกับพฤติกรรมลูกค้า', 'รายชื่อลูกค้า', 'ราคาสินค้า'], ans: 1 },
        { module: 2, q: 'Blue Ocean Strategy หมายถึง?', opts: ['แข่งในตลาดเดิม', 'สร้างตลาดใหม่ไร้คู่แข่ง', 'ลดราคา', 'เพิ่มโฆษณา'], ans: 1 }
    ],
    'email-marketing': [
        { module: 0, q: 'Open Rate ที่ดีควรอยู่ที่เท่าไร?', opts: ['1-5%', '10-15%', '20-30%', '50%+'], ans: 2 },
        { module: 1, q: 'Lead Magnet คืออะไร?', opts: ['แม่เหล็ก', 'ของฟรีแลกอีเมล', 'โฆษณา', 'Landing Page'], ans: 1 },
        { module: 2, q: 'Mobile-First Email สำคัญเพราะ?', opts: ['ดูสวย', 'คนส่วนใหญ่เปิดอีเมลบนมือถือ', 'ถูกกว่า', 'ส่งเร็วกว่า'], ans: 1 }
    ]
};

const COURSE_COLORS = {
    'performance-marketing': { primary: '#e63946', gradient: 'linear-gradient(135deg,#1a0a0a,#2a0f0f)' },
    'brand-building': { primary: '#ff9f0a', gradient: 'linear-gradient(135deg,#1a1200,#2a1f0a)' },
    'ai-marketing': { primary: '#bf5af2', gradient: 'linear-gradient(135deg,#120a1a,#1f0f2a)' },
    'short-video': { primary: '#30d158', gradient: 'linear-gradient(135deg,#0a1a0f,#0f2a1a)' },
    'strategic-planning': { primary: '#2997ff', gradient: 'linear-gradient(135deg,#0a101a,#0f1a2a)' },
    'email-marketing': { primary: '#ff6b6b', gradient: 'linear-gradient(135deg,#1a0a0a,#2a0f0f)' }
};


// ── Notes helpers ──
function getNotes(courseId) {
    var all = JSON.parse(localStorage.getItem('courseNotes') || '{}');
    return all[courseId] || {};
}
function saveNote(courseId, lessonKey, text) {
    var all = JSON.parse(localStorage.getItem('courseNotes') || '{}');
    if (!all[courseId]) all[courseId] = {};
    all[courseId][lessonKey] = { text: text, updated: new Date().toLocaleString('th-TH') };
    localStorage.setItem('courseNotes', JSON.stringify(all));
}
function deleteNote(courseId, lessonKey) {
    var all = JSON.parse(localStorage.getItem('courseNotes') || '{}');
    if (all[courseId]) { delete all[courseId][lessonKey]; localStorage.setItem('courseNotes', JSON.stringify(all)); }
}
function getAllNotes(courseId) {
    var notes = getNotes(courseId);
    return Object.entries(notes).filter(function(e) { return e[1].text.trim(); });
}


// ── Wishlist helpers ──
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
}
function isWishlisted(id) {
    return getWishlist().indexOf(id) !== -1;
}
function toggleWishlist(id) {
    var list = getWishlist();
    var idx = list.indexOf(id);
    if (idx === -1) { list.push(id); } else { list.splice(idx, 1); }
    localStorage.setItem('wishlist', JSON.stringify(list));
    return idx === -1; // returns true if added
}


// ── Reminder helpers ──
function getLastVisit() {
    return localStorage.getItem('lastLearningVisit') || null;
}
function setLastVisit() {
    localStorage.setItem('lastLearningVisit', new Date().toISOString());
}
function getDaysSinceLastVisit() {
    var last = getLastVisit();
    if (!last) return 999;
    var diff = Date.now() - new Date(last).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}
function getReminderDismissed() {
    var d = localStorage.getItem('reminderDismissed');
    if (!d) return false;
    // Dismiss lasts 24 hours
    return (Date.now() - parseInt(d)) < 24 * 60 * 60 * 1000;
}
function dismissReminder() {
    localStorage.setItem('reminderDismissed', Date.now().toString());
}
