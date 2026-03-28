// ==========================================================================
// Progress Reminder — Shows when user hasn't studied in a while
// ==========================================================================

(function initReminder() {
    // Only show if logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') return;

    var purchased = getPurchased();
    var completed = getCompleted();
    var inProgress = purchased.filter(function(id) { return completed.indexOf(id) === -1; });

    // No courses in progress — skip
    if (inProgress.length === 0) return;

    // Already dismissed today — skip
    if (getReminderDismissed()) return;

    var days = getDaysSinceLastVisit();

    // Show reminder if 1+ days since last learning visit (for demo, show if > 0)
    // In production, change to days >= 3
    if (days < 1) return;

    // Find the course to remind about
    var allProgress = JSON.parse(localStorage.getItem('lessonProgress') || '{}');
    var reminderCourse = null;
    var reminderPct = 0;
    var reminderLesson = '';

    for (var i = 0; i < inProgress.length; i++) {
        var id = inProgress[i];
        var c = COURSES[id];
        if (!c) continue;
        var prog = allProgress[id] || { current: 0, completed: [] };
        var total = 0;
        c.curriculum.forEach(function(m) { total += m.lessons.length; });
        var pct = total > 0 ? Math.round((prog.completed.length / total) * 100) : 0;
        // Pick the one with most progress (most likely to finish)
        if (pct > reminderPct || !reminderCourse) {
            reminderCourse = c;
            reminderPct = pct;
            // Find current lesson name
            var lessonIdx = 0;
            c.curriculum.forEach(function(m) {
                m.lessons.forEach(function(l) {
                    if (lessonIdx === prog.current) reminderLesson = l;
                    lessonIdx++;
                });
            });
        }
    }

    if (!reminderCourse) return;

    var remaining = inProgress.length;
    var daysText = days === 1 ? '1 วัน' : days + ' วัน';

    // Create banner HTML
    var banner = document.createElement('div');
    banner.className = 'reminder-banner';
    banner.id = 'reminderBanner';
    banner.innerHTML =
        '<button class="reminder-close" onclick="closeReminder()" aria-label="Close">&times;</button>' +
        '<div class="reminder-icon">👋</div>' +
        '<div class="reminder-title">คุณหายไป ' + daysText + ' แล้วนะ!</div>' +
        '<div class="reminder-text">คุณยังมี ' + remaining + ' คอร์สที่เรียนไม่จบ มาเรียนต่อกันเถอะ</div>' +
        '<div class="reminder-course">' +
            '<img src="' + reminderCourse.img + '" alt="' + reminderCourse.title + '">' +
            '<div class="reminder-course-info">' +
                '<div class="reminder-course-name">' + reminderCourse.title + '</div>' +
                '<div class="reminder-course-meta">' + (reminderLesson || 'เริ่มเรียนต่อ') + '</div>' +
                '<div class="reminder-prog"><div class="reminder-prog-fill" style="width:' + reminderPct + '%"></div></div>' +
            '</div>' +
        '</div>' +
        '<div class="reminder-actions">' +
            '<a href="learning-player.html?id=' + reminderCourse.id + '" class="reminder-btn primary" onclick="setLastVisit()">เรียนต่อเลย →</a>' +
            '<button class="reminder-btn ghost" onclick="closeReminder()">ไว้ทีหลัง</button>' +
        '</div>';

    document.body.appendChild(banner);

    // Show with delay
    setTimeout(function() {
        banner.classList.add('show');
    }, 2000);
})();

function closeReminder() {
    var banner = document.getElementById('reminderBanner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(function() { banner.remove(); }, 500);
    }
    dismissReminder();
}
