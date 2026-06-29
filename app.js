/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          JOLIE'S SPACE — CAREER DEVELOPMENT APP          ║
 * ║──────────────────────────────────────────────────────────║
 * ║  © 2026 Jolie. All Rights Reserved.                      ║
 * ║  Proprietary and Confidential.                           ║
 * ║                                                          ║
 * ║  This source code is the intellectual property of        ║
 * ║  its author. Unauthorized copying, reverse engineering,  ║
 * ║  modification, or redistribution is strictly prohibited  ║
 * ║  and may result in legal action.                         ║
 * ║                                                          ║
 * ║  Build: v2.2 | Signature: JS-2026-06-27-JOLIESPC        ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// ── IP Protection Layer ──────────────────────────────────────
(function _joliesSpaceProtect() {
    // 1. Console copyright warning (shows when DevTools is opened)
    const _w = [
        '%c🔒 JOLIE\'S SPACE — PROPRIETARY SOFTWARE',
        'color:#28bdbf;font-size:18px;font-weight:900;',
        '\n%c© 2026 Jolie. All Rights Reserved.\nThis application is protected intellectual property.\nUnauthorized copying or redistribution is prohibited.',
        'color:#ff3b30;font-size:12px;'
    ];
    console.log(_w[0], _w[1], _w[2], _w[3]);

    // 2. Disable right-click context menu with branded notice
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 3. Disable common keyboard shortcuts for viewing source / save page
    document.addEventListener('keydown', function(e) {
        // Block Ctrl+U (View Source), Ctrl+S (Save page), Ctrl+Shift+I (DevTools)
        if ((e.ctrlKey || e.metaKey) && (
            e.key === 'u' || e.key === 'U' ||
            e.key === 's' || e.key === 'S'
        )) {
            e.preventDefault();
            return false;
        }
    });

    // 4. Set footer year dynamically
    document.addEventListener('DOMContentLoaded', function() {
        // Set footer year dynamically
        const yearEl = document.getElementById('footer-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
        // ---- Space name handling ----
        const spaceNameSpan = document.getElementById('footer-space-name');
        const spaceNameInput = document.getElementById('space-name-input');
        const logoTextEl = document.querySelector('.logo-text');
        // Migrate old "Jolie's Space" default to new brand name
        const _raw = localStorage.getItem('jolies_space_name');
        if (_raw === "Jolie's Space") localStorage.removeItem('jolies_space_name');
        const storedName = localStorage.getItem('jolies_space_name') || "Career Development Plan";
        if (spaceNameSpan) spaceNameSpan.textContent = storedName;
        if (logoTextEl) logoTextEl.textContent = storedName;
        if (spaceNameInput) {
            spaceNameInput.value = storedName;
            spaceNameInput.addEventListener('input', function (e) {
                const newName = e.target.value || "Career Development Plan";
                localStorage.setItem('jolies_space_name', newName);
                if (spaceNameSpan) spaceNameSpan.textContent = newName;
                if (logoTextEl) logoTextEl.textContent = newName;
            });
        }

    });
})();

// ── App Data ─────────────────────────────────────────────────
// Default Pre-populated Career Development Data
const DEFAULT_DATA = {
    profile: {
        title: "Marketing Lead",
        startDate: "2025-12-14",
        promotions: [
            "Marketing Manager - 03/2024 - 04/2025",
            "Marketing Specialist - 03/2023 - 03/2024"
        ]
    },
    jobResponsibilities: [
        "Owned the entire process as the first marketing hire, shaping the department while balancing strategic initiatives with day-to-day execution in a fast-paced environment",
        "Owned content strategy - developing, publishing, and distributing thought leadership articles across relevant channels",
        "Built and amplified the public presence of the leadership team, ensuring consistent visibility across media, events, and digital platforms",
        "Developed and executed campaigns that drive top-of-funnel awareness, engagement, and demand",
        "Managed and grew the company's digital footprint, including social media channels, website, newsletters, and other owned media",
        "Supported event strategy and organization - from industry conferences to company-hosted meetups - to maximize brand and business impact"
    ],
    vision: "I want to transition from executing tactical campaigns to directing overall marketing strategy. My goal is to build a high-performing marketing department, establish a scalable demand generation engine, and solidify our brand as a key voice in the industry. Over the next 12-24 months, I want to step into a Marketing Director role, managing a small cross-functional team.",
    targetRole: "Marketing Director\n- Oversee brand, product marketing, and user acquisition.\n- Hire and mentor a content strategist and a growth specialist.\n- Manage budget and report at the executive level.",
    strengths: [
        { id: "s1", strength: "Writing & Thought Leadership", details: "Feedback on the conversion playbook I wrote last quarter was 95% positive, with multiple clients stating it helped them feel more confident in the process." },
        { id: "s2", strength: "Strategic Campaign Execution", details: "Led the product launch campaign that reached 120% of sign-up targets within 30 days." },
        { id: "s3", strength: "Stakeholder Communication", details: "Regularly distill complex data into executive summaries — received high praise for clarity and conciseness." },
        { id: "s4", strength: "Content Calendar Management", details: "Built and maintained a rolling 90-day content calendar across 4 channels, never missing a publication date in 6 months." }
    ],
    growthAreas: [
        { id: "g1", growthArea: "Public Speaking & Workshop Facilitation", details: "It's been a while since I've spoken externally or facilitated full-team workshops. Need practice to build our brand presence." },
        { id: "g2", growthArea: "Data Analytics & Funnel Attribution", details: "Need more practice setting up analytics to properly track multi-touch marketing campaigns." },
        { id: "g3", growthArea: "Team Leadership & People Management", details: "As I move towards a Director role, I need to develop structured 1:1 frameworks, hiring skills, and performance management practices." }
    ],
    skills: [
        {
            id: "sk1",
            name: "Clear Project Scoping & Success Metrics",
            current: "4 - Advanced",
            required: "3 - Proficient",
            gap: "Level 4: Demonstrates the skill + guides others",
            notes: "Comfortable leading project scoping workshops. Need to maintain templates for consistency."
        },
        {
            id: "sk2",
            name: "Data Analytics & Funnel Attribution",
            current: "2 - Intermediate",
            required: "4 - Advanced",
            gap: "Gap from Level 2 to Level 4",
            notes: "Focus on understanding attribution models and building HubSpot dashboards."
        },
        {
            id: "sk3",
            name: "Public Speaking & Brand Evangelism",
            current: "2 - Intermediate",
            required: "4 - Advanced",
            gap: "Gap from Level 2 to Level 4",
            notes: "Identify 2-3 local events to apply to speak at or join panels this year."
        },
        {
            id: "sk4",
            name: "Budget Planning & ROI Analysis",
            current: "3 - Proficient",
            required: "4 - Advanced",
            gap: "Need to manage larger budgets quarterly",
            notes: "Coordinate with finance to review budget tracking templates."
        },
        {
            id: "sk5",
            name: "People Management & Team Building",
            current: "1 - Beginner",
            required: "3 - Proficient",
            gap: "No direct reports yet — need formal leadership experience",
            notes: "Take a leadership development program. Shadow senior managers in 1:1s and performance reviews."
        },
        {
            id: "sk6",
            name: "Organic Growth & SEO Strategy",
            current: "3 - Proficient",
            required: "4 - Advanced",
            gap: "Need deeper understanding of technical SEO and content clustering",
            notes: "Complete an advanced SEO course and conduct a content audit by Q2."
        }
    ],
    goals: [
        {
            id: "go1",
            title: "Create a professional pitch deck and roll out to the entire sales team",
            status: "Completed",
            deadline: "2026-03-31",
            notes: "Sales enablement playbook finished and distributed to regional teams."
        },
        {
            id: "go2",
            title: "Set up unified campaign attribution funnel in HubSpot",
            status: "In progress",
            deadline: "2026-09-30",
            notes: "Working with operations to clean up marketing tags and contact sources."
        },
        {
            id: "go3",
            title: "Host the first executive-led webinar series",
            status: "In progress",
            deadline: "2026-12-31",
            notes: "Speaker lineup locked. Landing page and email sequence in progress."
        },
        {
            id: "go4",
            title: "Launch new brand identity across all owned media",
            status: "Not started",
            deadline: "2026-11-30",
            notes: "Will kick off brand workshop with design agency in Q3. Goal: new visual identity live in Nov."
        },
        {
            id: "go5",
            title: "Grow organic LinkedIn following to 5,000",
            status: "In progress",
            deadline: "2026-06-30",
            notes: "Currently at 2,800. Publishing thought leadership from CEO + team 3x/week."
        },
        {
            id: "go6",
            title: "Build and present the 2027 marketing budget proposal to the executive board",
            status: "Not started",
            deadline: "2026-08-31",
            notes: "First time owning the full budget plan — need to align with finance on the format."
        }
    ],
    courses: [
        {
            id: "c1",
            name: "Google Ads — General Assembly",
            status: "In progress"
        },
        {
            id: "c2",
            name: "Reforge Growth Series",
            status: "Completed"
        },
        {
            id: "c3",
            name: "CXL Institute — Advanced Content Marketing",
            status: "Not started"
        },
        {
            id: "c4",
            name: "HubSpot Attribution & Reporting Certification",
            status: "In progress"
        },
        {
            id: "c5",
            name: "LinkedIn Learning — Becoming a Manager",
            status: "Not started"
        }
    ]
};

// Translation Dictionary
const TRANSLATIONS = {
    en: {
        logo_text: "Career Development Plan",
        menu_dashboard: "Dashboard",
        menu_vision: "Career Vision",
        menu_strengths: "Strengths & Growth",
        menu_skills: "Skill Gaps",
        menu_goals: "Goals & Courses",
        export_btn: "Export JSON",
        import_btn: "Import JSON",
        credits: "JB",
        notion_link: "View Original Notion",
        header_callout: "This Career Development Plan is a practical tool to help you take ownership of your growth. Use it to define where you want to go, understand what skills you need to build, and turn your goals into a clear, structured roadmap.",
        profile_role: "Current Role",
        profile_start: "Start Date",
        profile_promo: "Promotions",
        profile_promo_view: "View Details",
        profile_promo_add: "Add promotion history...",
        metric_goals: "Goal Completion",
        metric_courses: "Active Courses",
        metric_gaps: "Critical Gaps",
        card_skills_overview: "Skill Levels Overview",
        card_responsibilities: "Job Responsibilities",
        new_jd_placeholder: "Add new responsibility...",
        add_btn: "Add",
        add_row_btn: "Add Row",
        add_skill_btn: "Add Skill",
        add_goal_btn: "Add Goal",
        add_course_btn: "Add Course",
        vision_title: "Career Vision (12–24 Months)",
        vision_subtitle: "A clear statement of where you want to be in the next 1–2 years.",
        vision_p1: "What role or level do you want to grow into?",
        vision_p2: "What type of work energises you the most?",
        vision_p3: "What kind of problems do you want to solve?",
        vision_p4: "What impact do you want to be known for?",
        vision_label: "Write your vision:",
        vision_placeholder: "Describe your 1-2 year career vision here...",
        target_role_title: "Target Role or Level",
        target_role_subtitle: "Define the next specific step in your career journey.",
        target_role_p1: "Next level up in your current role",
        target_role_p2: "A senior version of your role",
        target_role_p3: "A cross-functional pivot",
        target_role_p4: "A new specialisation",
        target_role_label: "Write your target role / steps:",
        target_role_placeholder: "Detail the target title, requirements, or pivots you aim for...",
        strengths_title: "Core Strengths",
        strengths_subtitle: "Identify what you want to be known for and what strengths you want to deepen.",
        th_strength: "Strength",
        th_details: "Details or Examples",
        growth_title: "Growth Areas",
        growth_subtitle: "Identify areas where improvements or new capabilities will make the most impact.",
        th_growth_area: "Growth Area",
        skills_title: "Skill Gap Assessment",
        skills_subtitle: "Map the critical skills needed for your target role, assess your current level, and track the gaps.",
        th_skill: "Skill",
        th_current: "Current Level",
        th_required: "Required Level",
        th_gap: "Gap Description",
        th_notes: "Notes",
        th_actions: "Actions",
        goals_title: "Goals (Next 6-12 Months)",
        goals_subtitle: "Actions and milestones that will move you closer to your vision.",
        th_goal_desc: "Goal Description",
        th_status: "Status",
        th_deadline: "Deadline",
        courses_title: "Courses & Training",
        courses_subtitle: "Structured learning paths, certifications, or workshops to complete.",
        th_course_name: "Course / Program Name",
        // Modal translations
        modal_cancel: "Cancel",
        modal_save: "Save",
        modal_add_skill: "Add Skill",
        modal_edit_skill: "Edit Skill",
        modal_skill_name: "Skill Name",
        modal_skill_gap: "Gap Description",
        modal_notes: "Notes",
        modal_add_goal: "Add Goal",
        modal_edit_goal: "Edit Goal",
        modal_goal_desc: "Goal Description",
        modal_goal_deadline: "Deadline",
        modal_add_course: "Add Course",
        modal_edit_course: "Edit Course",
        modal_course_name: "Course / Program Name",
        msg_imported: "Data imported successfully!",
        msg_invalid: "Invalid JSON schema. Missing required career plan sections.",
        msg_error: "Error reading file: ",
        hint_skill_name: "E.g., HubSpot Campaign Setup, Public Speaking",
        hint_skill_gap: "Describe the gap between your current and required level",
        hint_notes: "E.g., Books to read, mentors to ask, tools to learn",
        hint_goal_desc: "What specific milestone do you want to hit?",
        hint_goal_notes: "E.g., Key deliverables, links to playbooks, KPIs",
        hint_course_name: "E.g., Google Ads Course, Growth Series Workshop",
        search_skills_placeholder: "Search skills...",
        search_goals_placeholder: "Search goals...",
        search_courses_placeholder: "Search courses...",
        filter_all_skills: "All Skills",
        filter_has_gap: "Has Gap (Req > Curr)",
        filter_no_gap: "No Gap",
        filter_all_statuses: "All Statuses",
        status_not_started_opt: "Not Started",
        status_in_progress_opt: "In Progress",
        status_completed_opt: "Completed",
        menu_history: "Activity History",
        history_title: "Activity History",
        history_subtitle: "Review your recent edits and restore previous versions of your plan.",
        history_clear_btn: "Clear History",
        export_btn: "Backup Plan (JSON)",
        import_btn: "Restore Plan (JSON)",
        reset_btn: "Reset Blank Plan",
        share_card_title: "Brag Your Progress",
        share_card_desc: "Download a beautifully designed career summary card to share on Threads or Facebook.",
        share_card_btn: "Download Share Card",
        customizer_btn: "Theme Customizer",
        modal_customizer_title: "Customize Interface",
        customizer_accent: "Accent Color",
        customizer_bg_color: "Custom Background Color",
        customizer_bg_image: "Background Image URL",
        customizer_upload_bg: "Upload Image",
        customizer_clear_bg: "Remove Image",
        menu_guide: "Guide & Notes",
        guide_title: "Guide & Important Notes",
        guide_step_title: "🚀 3 Steps to Plan",
        guide_step1_name: "Step 1: Discover",
        guide_step1_desc: "Define your career vision, strengths, and growth areas.",
        guide_step2_name: "Step 2: Find Gaps",
        guide_step2_desc: "Evaluate your current skills against your target role's requirements.",
        guide_step3_name: "Step 3: Bridge Gaps",
        guide_step3_desc: "Set actionable goals and enroll in necessary courses.",
        guide_security_title: "🔒 100% Data Security",
        guide_security_p1: "This application runs entirely in your browser using <code>localStorage</code>.",
        guide_security_p2: "<strong>Your data is completely private.</strong> It is only saved on your current device and is never sent to any server or database over the internet.",
        guide_security_p3: "<em>Note: If you open this exact link on another device, it will show a blank canvas. Everyone has their own isolated workspace!</em>",
        guide_backup_title: "💾 How to Never Lose Data",
        guide_backup_p1: "If you clear your browser history/cache or switch devices, your data will be gone.",
        guide_backup_p2: "<strong>The Solution:</strong>",
        guide_backup_btn1: "Click <strong>Backup Plan</strong> <i data-lucide=\"download\" style=\"width:14px;height:14px;display:inline-block\"></i> (bottom left) to download your data as a <code>.json</code> file.",
        guide_backup_btn2: "Click <strong>Restore Plan</strong> <i data-lucide=\"upload\" style=\"width:14px;height:14px;display:inline-block\"></i> on any device to upload the file and continue right where you left off!"
    },
    vi: {
        logo_text: "Career Development Plan",
        menu_dashboard: "Bảng tin",
        menu_vision: "Tầm nhìn sự nghiệp",
        menu_strengths: "Thế mạnh & Phát triển",
        menu_skills: "Đánh giá Kỹ năng",
        menu_goals: "Mục tiêu & Khóa học",
        export_btn: "Xuất file JSON",
        import_btn: "Nhập file JSON",
        credits: "Kế hoạch Phát triển Sự nghiệp",
        notion_link: "Xem Notion Gốc",
        header_callout: "Kế hoạch Phát triển Sự nghiệp này là công cụ thực tế giúp bạn tự chủ trong phát triển bản thân. Hãy dùng nó để định hình định hướng mong muốn, hiểu rõ những kỹ năng cần nâng cao và chuyển đổi các mục tiêu thành một lộ trình cụ thể, khoa học.",
        profile_role: "Chức vụ hiện tại",
        profile_start: "Ngày bắt đầu",
        profile_promo: "Lịch sử thăng tiến",
        profile_promo_view: "Xem chi tiết",
        profile_promo_add: "Thêm lịch sử thăng tiến...",
        metric_goals: "Mục tiêu hoàn thành",
        metric_courses: "Khóa học đang học",
        metric_gaps: "Thiếu hụt kỹ năng",
        card_skills_overview: "Tổng quan trình độ kỹ năng",
        card_responsibilities: "Trách nhiệm Công việc",
        new_jd_placeholder: "Thêm trách nhiệm mới...",
        add_btn: "Thêm",
        add_row_btn: "Thêm Dòng",
        add_skill_btn: "Thêm Kỹ năng",
        add_goal_btn: "Thêm Mục tiêu",
        add_course_btn: "Thêm Khóa học",
        vision_title: "Tầm nhìn Sự nghiệp (12–24 Tháng)",
        vision_subtitle: "Tuyên bố rõ ràng vị trí hoặc định hướng bạn muốn hướng đến trong 1-2 năm tới.",
        vision_p1: "Bạn muốn phát triển lên vị trí hoặc cấp bậc nào?",
        vision_p2: "Loại công việc nào truyền cảm hứng nhiều nhất cho bạn?",
        vision_p3: "Bạn mong muốn giải quyết những thử thách/vấn đề gì?",
        vision_p4: "Tầm ảnh hưởng nào bạn muốn mọi người nhớ tới?",
        vision_label: "Mô tả tầm nhìn của bạn:",
        vision_placeholder: "Viết tầm nhìn phát triển sự nghiệp 1-2 year của bạn tại đây...",
        target_role_title: "Vị trí hoặc Cấp bậc Mục tiêu",
        target_role_subtitle: "Xác định rõ ràng bước đi cụ thể tiếp theo trong lộ trình sự nghiệp.",
        target_role_p1: "Thăng cấp ở vị trí hiện tại",
        target_role_p2: "Phiên bản Senior của vai trò hiện tại",
        target_role_p3: "Luân chuyển chéo phòng ban",
        target_role_p4: "Đi sâu vào một chuyên môn mới",
        target_role_label: "Kế hoạch cho vị trí mục tiêu:",
        target_role_placeholder: "Chi tiết hóa vị trí, yêu cầu cần đạt hoặc kế hoạch luân chuyển...",
        strengths_title: "Điểm mạnh Cốt lõi",
        strengths_subtitle: "Định hình các thế mạnh nổi trội và những điểm mạnh bạn muốn tiếp tục mài giũa.",
        th_strength: "Điểm mạnh",
        th_details: "Chi tiết hoặc ví dụ cụ thể",
        growth_title: "Lĩnh vực Cần phát triển",
        growth_subtitle: "Xác định các khía cạnh cần cải thiện hoặc các kỹ năng mới cần trang bị để tối ưu hóa hiệu quả.",
        th_growth_area: "Lĩnh vực cần phát triển",
        skills_title: "Đánh giá Khoảng trống Kỹ năng",
        skills_subtitle: "Liệt kê các kỹ năng cốt lõi cho vị trí mục tiêu, đánh giá trình độ hiện tại và phát hiện các khoảng trống.",
        th_skill: "Kỹ năng",
        th_current: "Cấp độ hiện tại",
        th_required: "Cấp độ yêu cầu",
        th_gap: "Mô tả khoảng trống",
        th_notes: "Ghi chú",
        th_actions: "Thao tác",
        goals_title: "Mục tiêu hành động (6-12 Tháng)",
        goals_subtitle: "Những hành động và cột mốc giúp bạn tiến gần hơn đến tầm nhìn đã đặt ra.",
        th_goal_desc: "Mô tả mục tiêu",
        th_status: "Trạng thái",
        th_deadline: "Hạn chót",
        courses_title: "Khóa học & Đào tạo",
        courses_subtitle: "Lộ trình đào tạo, chứng chỉ chuyên môn hoặc các workshop cần hoàn thành.",
        th_course_name: "Tên khóa học / Chương trình",
        // Modal translations
        modal_cancel: "Hủy bỏ",
        modal_save: "Lưu lại",
        modal_add_skill: "Thêm Kỹ năng",
        modal_edit_skill: "Sửa Kỹ năng",
        modal_skill_name: "Tên kỹ năng",
        modal_skill_gap: "Mô tả khoảng trống kỹ năng",
        modal_notes: "Ghi chú học tập",
        modal_add_goal: "Thêm Mục tiêu",
        modal_edit_goal: "Sửa Mục tiêu",
        modal_goal_desc: "Mô tả mục tiêu hành động",
        modal_goal_deadline: "Hạn chót hoàn thành",
        modal_add_course: "Thêm Khóa học",
        modal_edit_course: "Sửa Khóa học",
        modal_course_name: "Tên khóa học / đào tạo",
        msg_imported: "Nhập dữ liệu thành công!",
        msg_invalid: "Cấu trúc JSON không hợp lệ. Vui lòng kiểm tra lại.",
        msg_error: "Lỗi đọc tệp tin: ",
        hint_skill_name: "Ví dụ: Thiết lập chiến dịch HubSpot, Thuyết trình trước đám đông",
        hint_skill_gap: "Mô tả khoảng trống giữa năng lực hiện tại và yêu cầu",
        hint_notes: "Ví dụ: Sách cần đọc, người hướng dẫn, công cụ cần học",
        hint_goal_desc: "Cột mốc cụ thể nào bạn muốn đạt được?",
        hint_goal_notes: "Ví dụ: Các kết quả bàn giao chính, KPIs, liên kết tài liệu",
        hint_course_name: "Ví dụ: Khóa học Google Ads, Hội thảo Reforge Growth",
        search_skills_placeholder: "Tìm kiếm kỹ năng...",
        search_goals_placeholder: "Tìm kiếm mục tiêu...",
        search_courses_placeholder: "Tìm kiếm khóa học...",
        filter_all_skills: "Tất cả kỹ năng",
        filter_has_gap: "Có khoảng trống năng lực",
        filter_no_gap: "Đủ hoặc vượt yêu cầu",
        filter_all_statuses: "Tất cả trạng thái",
        status_not_started_opt: "Chưa bắt đầu",
        status_in_progress_opt: "Đang thực hiện",
        status_completed_opt: "Đã hoàn thành",
        menu_history: "Lịch sử hoạt động",
        history_title: "Lịch sử hoạt động",
        history_subtitle: "Xem lại danh sách các chỉnh sửa gần đây và khôi phục các phiên bản cũ của kế hoạch.",
        history_clear_btn: "Xóa lịch sử",
        export_btn: "Sao lưu kế hoạch",
        import_btn: "Khôi phục kế hoạch",
        reset_btn: "Xóa sạch dữ liệu",
        share_card_title: "Khoe Tiến Độ Sự Nghiệp",
        share_card_desc: "Tải ảnh thẻ tóm tắt tiến độ sự nghiệp cực đẹp để chia sẻ lên Threads, Facebook.",
        share_card_btn: "Tải Ảnh Chia Sẻ",
        customizer_btn: "Tùy chỉnh giao diện",
        modal_customizer_title: "Thiết lập giao diện",
        customizer_accent: "Màu sắc chủ đạo",
        customizer_bg_color: "Màu nền tùy chọn",
        customizer_bg_image: "Hình nền tùy chọn",
        customizer_upload_bg: "Tải ảnh lên",
        customizer_clear_bg: "Xóa ảnh",
        menu_guide: "Hướng dẫn & Lưu ý",
        guide_title: "Hướng dẫn & Lưu ý quan trọng",
        guide_step_title: "🚀 3 Bước Lên Kế Hoạch",
        guide_step1_name: "Bước 1: Khám phá",
        guide_step1_desc: "Định hình tầm nhìn sự nghiệp, thế mạnh và điểm yếu.",
        guide_step2_name: "Bước 2: Tìm lỗ hổng",
        guide_step2_desc: "Đánh giá kỹ năng hiện tại so với yêu cầu của vị trí mơ ước.",
        guide_step3_name: "Bước 3: Lấp khoảng trống",
        guide_step3_desc: "Thiết lập mục tiêu hành động và các khóa học cần thiết.",
        guide_security_title: "🔒 Dữ liệu an toàn 100%",
        guide_security_p1: "Ứng dụng này hoạt động hoàn toàn trên trình duyệt của bạn (dùng <code>localStorage</code>).",
        guide_security_p2: "<strong>Dữ liệu của bạn là hoàn toàn riêng tư.</strong> Nó chỉ được lưu trên máy của bạn và KHÔNG bao giờ bị gửi lên mạng hay bất kỳ máy chủ nào.",
        guide_security_p3: "<em>Lưu ý: Nếu bạn mở link web này ở một máy khác, nó sẽ hiện ra một bản kế hoạch trắng tinh. Mỗi người có một không gian làm việc độc lập!</em>",
        guide_backup_title: "💾 Bí kíp không mất dữ liệu",
        guide_backup_p1: "Vì dữ liệu nằm trên trình duyệt, nếu bạn xóa lịch sử web (Clear Cache) hoặc đổi máy tính, dữ liệu sẽ trống trơn.",
        guide_backup_p2: "<strong>Giải pháp:</strong>",
        guide_backup_btn1: "Bấm nút <strong>Sao lưu kế hoạch</strong> <i data-lucide=\"download\" style=\"width:14px;height:14px;display:inline-block\"></i> (góc trái dưới) để lưu file <code>.json</code> về máy.",
        guide_backup_btn2: "Khi cần, bấm <strong>Khôi phục kế hoạch</strong> <i data-lucide=\"upload\" style=\"width:14px;height:14px;display:inline-block\"></i> trên bất kỳ máy nào để up file lên và làm tiếp!"
    }
};

// State Manager
let appData = {};
let skillsChart = null;

const tableFilters = {
    skillSearch: "",
    skillGap: "all",
    goalSearch: "",
    goalStatus: "all",
    courseSearch: "",
    courseStatus: "all"
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    initTheme();
    updateUILanguage();
    lucide.createIcons();
    initTabs();
    initEventListeners();
    renderAll();
});

// Global history stacks
let undoStack = [];
let redoStack = [];
const MAX_HISTORY = 50;
let stateHistory = [];

// Load Data from LocalStorage
function loadData() {
    // Migrate old growthplan_* keys to jolies_space_*
    const oldData = localStorage.getItem("growthplan_data");
    if (oldData && !localStorage.getItem("jolies_space_data")) {
        localStorage.setItem("jolies_space_data", oldData);
        localStorage.removeItem("growthplan_data");
    }
    const oldHistory = localStorage.getItem("growthplan_history");
    if (oldHistory && !localStorage.getItem("jolies_space_history")) {
        localStorage.setItem("jolies_space_history", oldHistory);
        localStorage.removeItem("growthplan_history");
    }
    const oldTheme = localStorage.getItem("growthplan_theme");
    if (oldTheme && !localStorage.getItem("jolies_space_theme")) {
        localStorage.setItem("jolies_space_theme", oldTheme);
        localStorage.removeItem("growthplan_theme");
    }

    const savedData = localStorage.getItem("jolies_space_data");
    if (savedData) {
        try {
            appData = JSON.parse(savedData);
            if (!appData.lang) appData.lang = "en";
            if (!appData.themeSettings) {
                appData.themeSettings = { accentColor: "#28bdbf", customBgColor: "", bgImage: "" };
            }
            
            // Ensure all critical structures exist to prevent crashes
            if (!appData.profile) appData.profile = { title: "", startDate: "", promotions: [] };
            if (!appData.jobResponsibilities) appData.jobResponsibilities = appData.responsibilities || [];
            if (!appData.strengths) appData.strengths = [];
            if (!appData.growthAreas) appData.growthAreas = [];
            if (!appData.skills) appData.skills = [];
            if (!appData.goals) appData.goals = [];
            if (!appData.courses) appData.courses = [];
            
            applyCustomTheme();
        } catch (e) {
            console.error("Error parsing saved data, resetting to defaults", e);
            appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            appData.lang = "en";
            appData.themeSettings = { accentColor: "#28bdbf", customBgColor: "", bgImage: "" };
            applyCustomTheme();
        }
    } else {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        appData.lang = "en";
        appData.themeSettings = { accentColor: "#28bdbf", customBgColor: "", bgImage: "" };
        applyCustomTheme();
        saveData();
    }
    loadHistory();
}

// Load History from LocalStorage
function loadHistory() {
    try {
        const saved = localStorage.getItem("jolies_space_history");
        if (saved) {
            stateHistory = JSON.parse(saved);
        } else {
            stateHistory = [{
                id: 'h_init',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                description: appData.lang === "vi" ? "Khởi tạo kế hoạch" : "Initial plan load",
                state: JSON.stringify(appData)
            }];
            localStorage.setItem("jolies_space_history", JSON.stringify(stateHistory));
        }
        undoStack = [JSON.stringify(appData)];
        redoStack = [];
    } catch (e) {
        console.error("Error loading history", e);
    }
}

// Save Data to LocalStorage
function saveData() {
    localStorage.setItem("jolies_space_data", JSON.stringify(appData));
}

// Save state to Undo/Redo & Visual timeline history
function saveState(description) {
    saveData();
    const stateStr = JSON.stringify(appData);
    
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    stateHistory.push({
        id: 'h_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        timestamp: timeStr,
        description: description,
        state: stateStr
    });
    
    if (stateHistory.length > 30) {
        stateHistory.shift();
    }
    
    localStorage.setItem("jolies_space_history", JSON.stringify(stateHistory));
    
    if (undoStack.length === 0 || undoStack[undoStack.length - 1] !== stateStr) {
        undoStack.push(stateStr);
        if (undoStack.length > MAX_HISTORY) {
            undoStack.shift();
        }
        redoStack = [];
    }
    
    renderHistoryTab();
}

// Undo action
function handleUndo() {
    if (undoStack.length > 1) {
        const current = undoStack.pop();
        redoStack.push(current);
        const prevStateStr = undoStack[undoStack.length - 1];
        appData = JSON.parse(prevStateStr);
        localStorage.setItem("jolies_space_data", prevStateStr);
        renderAll();
        
        // Update input fields values on screen
        document.getElementById("profile-title").value = appData.profile.title || "";
        document.getElementById("profile-start-date").value = appData.profile.startDate || "";
        document.getElementById("vision-text").value = appData.vision || "";
        document.getElementById("target-role-text").value = appData.targetRole || "";
        
        renderHistoryTab();
    }
}

// Redo action
function handleRedo() {
    if (redoStack.length > 0) {
        const nextStateStr = redoStack.pop();
        undoStack.push(nextStateStr);
        appData = JSON.parse(nextStateStr);
        localStorage.setItem("jolies_space_data", nextStateStr);
        renderAll();
        
        // Update input fields values on screen
        document.getElementById("profile-title").value = appData.profile.title || "";
        document.getElementById("profile-start-date").value = appData.profile.startDate || "";
        document.getElementById("vision-text").value = appData.vision || "";
        document.getElementById("target-role-text").value = appData.targetRole || "";
        
        renderHistoryTab();
    }
}

// Reset data blanc plan
function resetData() {
    const isVi = appData.lang === "vi";
    const confirmMsg = isVi 
        ? "Bạn có chắc chắn muốn xóa sạch toàn bộ dữ liệu để viết lại từ đầu không? Hành động này không thể hoàn tác!"
        : "Are you sure you want to reset all data to a blank template? This cannot be undone.";
        
    if (confirm(confirmMsg)) {
        saveState(isVi ? "Đặt lại dữ liệu trắng" : "Reset plan to blank template");
        
        appData = {
            lang: appData.lang,
            themeSettings: appData.themeSettings,
            profile: {
                title: "",
                startDate: "",
                promotions: []
            },
            vision: "",
            targetRole: "",
            jobResponsibilities: [],
            strengths: [],
            growthAreas: [],
            skills: [],
            goals: [],
            courses: []
        };
        
        saveData();
        renderAll();
        
        // Update input fields value on screen
        document.getElementById("profile-title").value = "";
        document.getElementById("profile-start-date").value = "";
        document.getElementById("vision-text").value = "";
        document.getElementById("target-role-text").value = "";
    }
}


// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem("jolies_space_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    applyCustomTheme();
}

function applyCustomTheme() {
    if (!appData || !appData.themeSettings) return;
    const settings = appData.themeSettings;
    const appMain = document.querySelector('.app-main');
    
    // 1. Accent color — global variable (intentional, affects all UI accents)
    if (settings.accentColor) {
        document.documentElement.style.setProperty('--accent-color', settings.accentColor);
        document.documentElement.style.setProperty('--accent-glow', settings.accentColor + '15');
    } else {
        document.documentElement.style.removeProperty('--accent-color');
        document.documentElement.style.removeProperty('--accent-glow');
    }
    
    // 2. Custom Background color — apply ONLY to .app-main, not globally
    if (appMain) {
        if (settings.customBgColor) {
            appMain.style.backgroundColor = settings.customBgColor;
        } else {
            appMain.style.backgroundColor = '';
        }
    }
    
    // 3. Custom Background Image — on body, app-main becomes transparent
    if (settings.bgImage) {
        document.body.style.backgroundImage = `url("${settings.bgImage}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.classList.add("has-bg-image");
        // Let background image show through
        if (appMain) appMain.style.backgroundColor = '';
    } else {
        document.body.style.backgroundImage = "";
        document.body.classList.remove("has-bg-image");
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("jolies_space_theme", newTheme);
    
    // Update chart if initialized
    if (skillsChart) {
        renderChart();
    }
}

// Language Switcher Logic
function updateUILanguage() {
    const lang = appData.lang || "en";
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Toggle button indicator
    document.getElementById("lang-toggle-btn").innerText = lang === "en" ? "VI" : "EN";

    // Text setters
    const safeSetText = (sel, txt) => {
        const el = document.querySelector(sel);
        if (el) el.innerText = txt;
    };
    const safeSetHTML = (sel, html) => {
        const el = document.querySelector(sel);
        if (el) el.innerHTML = html;
    };
    const safeSetPlaceholder = (sel, pl) => {
        const el = document.querySelector(sel);
        if (el) el.setAttribute("placeholder", pl);
    };

    safeSetText(".logo-text", t.logo_text);
    // Sidebar menus are now handled by the generic data-i18n loop

    safeSetHTML("#export-btn", `<i data-lucide="download"></i> ${t.export_btn}`);
    safeSetHTML("#import-btn", `<i data-lucide="upload"></i> ${t.import_btn}`);
    safeSetHTML("#reset-btn", `<i data-lucide="refresh-cw"></i> ${t.reset_btn}`);
    safeSetText(".credits span", t.credits);
    safeSetText(".header-callout .callout-content p", t.header_callout);

    safeSetText(".profile-field:nth-child(1) .field-label", t.profile_role);
    safeSetText(".profile-field:nth-child(2) .field-label", t.profile_start);
    safeSetText(".profile-field:nth-child(3) .field-label", t.profile_promo);
    safeSetText(".promotions-details .details-summary", t.profile_promo_view);
    safeSetPlaceholder("#new-promo-input", t.profile_promo_add);

    safeSetText(".metrics-grid .metric-card:nth-child(1) .metric-label", t.metric_goals);
    safeSetText(".metrics-grid .metric-card:nth-child(2) .metric-label", t.metric_courses);
    safeSetText(".metrics-grid .metric-card:nth-child(3) .metric-label", t.metric_gaps);

    safeSetText(".chart-card .card-title", t.card_skills_overview);
    safeSetText(".overview-callout-card .card-title", t.card_responsibilities);
    safeSetPlaceholder("#new-jd-input", t.new_jd_placeholder);
    safeSetHTML("#add-jd-btn", `<i data-lucide="plus"></i> ${t.add_btn}`);

    // Personalization Share Card
    const dlBtn = document.getElementById("download-share-card-btn");
    if (dlBtn) {
        dlBtn.setAttribute("title", t.share_card_btn);
        dlBtn.innerHTML = `<i data-lucide="award"></i>`;
    }

    // Vision tab
    safeSetHTML("#vision .vision-card:nth-child(1) .section-title", `<i data-lucide="eye"></i> ${t.vision_title}`);
    safeSetText("#vision .vision-card:nth-child(1) .section-subtitle", t.vision_subtitle);
    
    const vPrompts = document.querySelectorAll("#vision .vision-card:nth-child(1) .prompt-box li");
    if (vPrompts.length >= 4) {
        vPrompts[0].innerText = t.vision_p1;
        vPrompts[1].innerText = t.vision_p2;
        vPrompts[2].innerText = t.vision_p3;
        vPrompts[3].innerText = t.vision_p4;
    }
    safeSetText("#vision .vision-card:nth-child(1) .editor-area label", t.vision_label);
    safeSetPlaceholder("#vision-text", t.vision_placeholder);

    // Target Role tab
    safeSetHTML("#vision .vision-card:nth-child(2) .section-title", `<i data-lucide="milestone"></i> ${t.target_role_title}`);
    safeSetText("#vision .vision-card:nth-child(2) .section-subtitle", t.target_role_subtitle);
    const tPrompts = document.querySelectorAll("#vision .vision-card:nth-child(2) .prompt-box li");
    if (tPrompts.length >= 4) {
        tPrompts[0].innerText = t.target_role_p1;
        tPrompts[1].innerText = t.target_role_p2;
        tPrompts[2].innerText = t.target_role_p3;
        tPrompts[3].innerText = t.target_role_p4;
    }
    safeSetText("#vision .vision-card:nth-child(2) .editor-area label", t.target_role_label);
    safeSetPlaceholder("#target-role-text", t.target_role_placeholder);

    // Strengths tab
    safeSetHTML("#strengths .table-card:nth-child(1) .section-title", `<i data-lucide="award"></i> ${t.strengths_title}`);
    safeSetHTML("#add-strength-btn", `<i data-lucide="plus"></i> ${t.add_row_btn}`);
    safeSetText("#strengths .table-card:nth-child(1) .section-subtitle", t.strengths_subtitle);
    safeSetText("#strengths-table th:nth-child(1)", t.th_strength);
    safeSetText("#strengths-table th:nth-child(2)", t.th_details);

    // Growths tab
    safeSetHTML("#strengths .table-card:nth-child(2) .section-title", `<i data-lucide="shield-alert"></i> ${t.growth_title}`);
    safeSetHTML("#add-growth-btn", `<i data-lucide="plus"></i> ${t.add_row_btn}`);
    safeSetText("#strengths .table-card:nth-child(2) .section-subtitle", t.growth_subtitle);
    safeSetText("#growths-table th:nth-child(1)", t.th_growth_area);
    safeSetText("#growths-table th:nth-child(2)", t.th_details);

    // Skills Gap tab
    safeSetHTML("#skills .table-card .section-title", `<i data-lucide="align-left"></i> ${t.skills_title}`);
    safeSetHTML("#add-skill-btn", `<i data-lucide="plus"></i> ${t.add_skill_btn}`);
    safeSetText("#skills .table-card .section-subtitle", t.skills_subtitle);
    safeSetText("#skills-table th:nth-child(1)", t.th_skill);
    safeSetText("#skills-table th:nth-child(2)", t.th_current);
    safeSetText("#skills-table th:nth-child(3)", t.th_required);
    safeSetText("#skills-table th:nth-child(4)", t.th_gap);
    safeSetText("#skills-table th:nth-child(5)", t.th_notes);
    safeSetText("#skills-table th:nth-child(6)", t.th_actions);

    // Goals & Courses tab
    safeSetHTML("#goals .table-card:nth-child(1) .section-title", `<i data-lucide="target"></i> ${t.goals_title}`);
    safeSetHTML("#add-goal-btn", `<i data-lucide="plus"></i> ${t.add_goal_btn}`);
    safeSetText("#goals .table-card:nth-child(1) .section-subtitle", t.goals_subtitle);
    safeSetText("#goals-table th:nth-child(1)", t.th_goal_desc);
    safeSetText("#goals-table th:nth-child(2)", t.th_status);
    safeSetText("#goals-table th:nth-child(3)", t.th_deadline);
    safeSetText("#goals-table th:nth-child(4)", t.th_notes);

    safeSetHTML("#goals .table-card:nth-child(2) .section-title", `<i data-lucide="graduation-cap"></i> ${t.courses_title}`);
    safeSetHTML("#add-course-btn", `<i data-lucide="plus"></i> ${t.add_course_btn}`);
    safeSetText("#goals .table-card:nth-child(2) .section-subtitle", t.courses_subtitle);
    safeSetText("#courses-table th:nth-child(1)", t.th_course_name);
    safeSetText("#courses-table th:nth-child(2)", t.th_status);

    // Activity History tab
    safeSetHTML("#history .table-card .section-title", `<i data-lucide="history"></i> ${t.history_title}`);
    safeSetText("#history .table-card .section-subtitle", t.history_subtitle);
    safeSetHTML("#clear-history-btn", `<i data-lucide="trash-2"></i> ${t.history_clear_btn}`);

    // Modal Forms
    safeSetText("#skill-form .form-group:nth-child(2) label", t.modal_skill_name);
    safeSetPlaceholder("#skill-name", t.modal_skill_name);
    safeSetText("#skill-form .form-row .form-group:nth-child(1) label", t.th_current);
    safeSetText("#skill-form .form-row .form-group:nth-child(2) label", t.th_required);
    safeSetText("#skill-form .form-group:nth-child(4) label", t.modal_skill_gap);
    safeSetText("#skill-form .form-group:nth-child(5) label", t.modal_notes);
    safeSetPlaceholder("#skill-notes", t.modal_notes);
    safeSetText("#skill-modal .modal-cancel-btn", t.modal_cancel);
    safeSetText("#skill-modal .modal-footer .btn-primary", t.modal_save);

    safeSetText("#goal-form .form-group:nth-child(2) label", t.modal_goal_desc);
    safeSetText("#goal-form .form-row .form-group:nth-child(1) label", t.th_status);
    safeSetText("#goal-form .form-row .form-group:nth-child(2) label", t.modal_goal_deadline);
    safeSetText("#goal-form .form-group:nth-child(4) label", t.modal_notes);
    safeSetPlaceholder("#goal-notes", t.modal_notes);
    safeSetText("#goal-modal .modal-cancel-btn", t.modal_cancel);
    safeSetText("#goal-modal .modal-footer .btn-primary", t.modal_save);

    safeSetText("#course-form .form-group:nth-child(2) label", t.modal_course_name);
    safeSetText("#course-form .form-group:nth-child(3) label", t.th_status);
    safeSetText("#course-modal .modal-cancel-btn", t.modal_cancel);
    safeSetText("#course-modal .modal-footer .btn-primary", t.modal_save);

    safeSetText("#hint-skill-name", t.hint_skill_name);
    safeSetText("#hint-skill-gap", t.hint_skill_gap);
    safeSetText("#hint-skill-notes", t.hint_notes);
    safeSetText("#hint-goal-title", t.hint_goal_desc);
    safeSetText("#hint-goal-notes", t.hint_goal_notes);
    safeSetText("#hint-course-name", t.hint_course_name);

    // Filters localization
    safeSetPlaceholder("#skill-search", t.search_skills_placeholder);
    safeSetPlaceholder("#goal-search", t.search_goals_placeholder);
    safeSetPlaceholder("#course-search", t.search_courses_placeholder);

    safeSetText("#skill-filter-gap option[value='all']", t.filter_all_skills);
    safeSetText("#skill-filter-gap option[value='gap']", t.filter_has_gap);
    safeSetText("#skill-filter-gap option[value='no-gap']", t.filter_no_gap);

    document.querySelectorAll("#goal-filter-status option, #course-filter-status option").forEach(opt => {
        if (opt.value === "all") opt.innerText = t.filter_all_statuses;
        else if (opt.value === "Not started") opt.innerText = t.status_not_started_opt;
        else if (opt.value === "In progress") opt.innerText = t.status_in_progress_opt;
        else if (opt.value === "Completed") opt.innerText = t.status_completed_opt;
    });

    // Generic data-i18n handler for all elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) {
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.setAttribute("placeholder", t[key]);
            } else {
                // Keep the lucide icon if the element contains one inside
                const icon = el.querySelector("i[data-lucide]");
                if (icon) {
                    el.innerHTML = "";
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(" " + t[key]));
                } else {
                    el.innerHTML = t[key];
                }
            }
        }
    });

    // Re-create icons to apply styles
    lucide.createIcons();
}

function toggleLanguage() {
    appData.lang = appData.lang === "en" ? "vi" : "en";
    saveData();
    updateUILanguage();
    renderAll();
}

function translateLevel(lvl) {
    if (appData.lang !== "vi") return lvl;
    const map = {
        "1 - Beginner": "1 - Cơ bản",
        "2 - Intermediate": "2 - Trung cấp",
        "3 - Proficient": "3 - Thành thạo",
        "4 - Advanced": "4 - Cao cấp",
        "5 - Expert": "5 - Chuyên gia"
    };
    return map[lvl] || lvl;
}

function translateStatus(status) {
    if (appData.lang !== "vi") return status;
    const map = {
        "Not started": "Chưa bắt đầu",
        "In progress": "Đang thực hiện",
        "Completed": "Đã hoàn thành"
    };
    return map[status] || status;
}

function initTabs() {
    const menuItems = document.querySelectorAll(".menu-item");
    const tabPanes = document.querySelectorAll(".tab-pane");

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            
            menuItems.forEach(mi => mi.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            item.classList.add("active");
            document.getElementById(tabId).classList.add("active");
            
            // Show/hide app-header based on tabId (hides lighbulb callout and profile summary on other pages)
            const header = document.querySelector(".app-header");
            if (header) {
                if (tabId === "dashboard") {
                    header.style.display = "block";
                } else {
                    header.style.display = "none";
                }
            }
            
            // Re-render chart specifically when dashboard is visible to ensure correct canvas scaling
            if (tabId === "dashboard") {
                setTimeout(renderChart, 50);
            }
        });
    });
}

// Event Listeners for editing basic text areas
function initEventListeners() {
    // Theme toggle
    document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);

    // Language toggle
    document.getElementById("lang-toggle-btn").addEventListener("click", toggleLanguage);

    // Profile Title
    const titleInput = document.getElementById("profile-title");
    titleInput.addEventListener("change", () => {
        const isVi = appData.lang === "vi";
        appData.profile.title = titleInput.value;
        saveState(isVi ? "Cập nhật chức vụ hiện tại" : "Updated current role");
    });

    // Profile Start Date
    const dateInput = document.getElementById("profile-start-date");
    dateInput.addEventListener("change", () => {
        const isVi = appData.lang === "vi";
        appData.profile.startDate = dateInput.value;
        saveState(isVi ? "Cập nhật ngày bắt đầu" : "Updated start date");
    });

    // Career Vision
    const visionArea = document.getElementById("vision-text");
    visionArea.addEventListener("change", () => {
        const isVi = appData.lang === "vi";
        appData.vision = visionArea.value;
        saveState(isVi ? "Cập nhật Tầm nhìn sự nghiệp" : "Updated Career Vision");
    });

    // Target Role
    const targetRoleArea = document.getElementById("target-role-text");
    targetRoleArea.addEventListener("change", () => {
        const isVi = appData.lang === "vi";
        appData.targetRole = targetRoleArea.value;
        saveState(isVi ? "Cập nhật Vị trí mục tiêu" : "Updated Target Role");
    });

    // Add Promotion
    document.getElementById("add-promo-btn").addEventListener("click", () => {
        const input = document.getElementById("new-promo-input");
        if (input.value.trim()) {
            const isVi = appData.lang === "vi";
            appData.profile.promotions.push(input.value.trim());
            const textVal = input.value.trim();
            input.value = "";
            saveState(isVi ? `Thêm lịch sử thăng tiến: ${textVal}` : `Added promotion: ${textVal}`);
            renderPromotions();
        }
    });

    // Add Job Responsibility
    document.getElementById("add-jd-btn").addEventListener("click", () => {
        const input = document.getElementById("new-jd-input");
        if (input.value.trim()) {
            const isVi = appData.lang === "vi";
            appData.jobResponsibilities.push(input.value.trim());
            const textVal = input.value.trim();
            input.value = "";
            saveState(isVi ? `Thêm trách nhiệm công việc: ${textVal}` : `Added job responsibility: ${textVal}`);
            renderJobDescription();
        }
    });

    // Table Add Buttons
    document.getElementById("add-strength-btn").addEventListener("click", () => {
        const isVi = appData.lang === "vi";
        appData.strengths.push({
            id: 'str_' + Date.now(),
            strength: isVi ? "Thế mạnh mới" : "New Strength",
            details: isVi ? "Thêm chi tiết..." : "Add examples..."
        });
        saveState(isVi ? "Thêm dòng thế mạnh mới" : "Added new strength row");
        renderStrengths();
    });

    document.getElementById("add-growth-btn").addEventListener("click", () => {
        const isVi = appData.lang === "vi";
        appData.growthAreas.push({
            id: 'gro_' + Date.now(),
            growthArea: isVi ? "Cơ hội phát triển mới" : "New Growth Area",
            details: isVi ? "Thêm chi tiết..." : "Add details..."
        });
        saveState(isVi ? "Thêm dòng cơ hội phát triển mới" : "Added new growth area row");
        renderGrowths();
    });

    // Modals Trigger Buttons
    document.getElementById("add-skill-btn").addEventListener("click", () => openSkillModal());
    document.getElementById("add-goal-btn").addEventListener("click", () => openGoalModal());
    document.getElementById("add-course-btn").addEventListener("click", () => openCourseModal());

    // Modal Close logic
    document.querySelectorAll(".modal-close-btn, .modal-cancel-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
        });
    });

    // Form Submissions
    document.getElementById("skill-form").addEventListener("submit", handleSkillSubmit);
    document.getElementById("goal-form").addEventListener("submit", handleGoalSubmit);
    document.getElementById("course-form").addEventListener("submit", handleCourseSubmit);

    // Export JSON
    document.getElementById("export-btn").addEventListener("click", exportData);

    // Import JSON triggers
    const importBtn = document.getElementById("import-btn");
    const importInput = document.getElementById("import-file-input");
    importBtn.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", importData);

    // Reset Data
    document.getElementById("reset-btn").addEventListener("click", resetData);



    // Personalization Share Card Download
    document.getElementById("download-share-card-btn").addEventListener("click", generateShareCard);

    // Clear History Log
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", clearHistory);
    }

    // Filter & Search Event Listeners
    document.getElementById("skill-search").addEventListener("input", (e) => {
        tableFilters.skillSearch = e.target.value;
        renderSkills();
    });
    document.getElementById("skill-filter-gap").addEventListener("change", (e) => {
        tableFilters.skillGap = e.target.value;
        renderSkills();
    });
    document.getElementById("goal-search").addEventListener("input", (e) => {
        tableFilters.goalSearch = e.target.value;
        renderGoals();
    });
    document.getElementById("goal-filter-status").addEventListener("change", (e) => {
        tableFilters.goalStatus = e.target.value;
        renderGoals();
    });
    document.getElementById("course-search").addEventListener("input", (e) => {
        tableFilters.courseSearch = e.target.value;
        renderCourses();
    });
    document.getElementById("course-filter-status").addEventListener("change", (e) => {
        tableFilters.courseStatus = e.target.value;
        renderCourses();
    });
    // Avatar upload event triggers
    const avatarBox = document.getElementById("avatar-preview-box");
    const avatarInput = document.getElementById("avatar-file-input");
    if (avatarBox && avatarInput) {
        avatarBox.addEventListener("click", () => avatarInput.click());
        avatarInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    const base64 = evt.target.result;
                    if (!appData.profile) appData.profile = {};
                    appData.profile.avatar = base64;
                    const isVi = appData.lang === "vi";
                    saveState(isVi ? "Cập nhật ảnh đại diện" : "Updated profile avatar");
                    renderAvatar();
                };
                reader.readAsDataURL(file);
            }
        });
    }
    // Customizer Modal triggers
    const customizerModal = document.getElementById("customizer-modal");
    const openCustomizer = () => {
        const settings = appData.themeSettings || { accentColor: "#28bdbf", customBgColor: "", bgImage: "" };
        document.getElementById("theme-accent-color").value = settings.accentColor || "#28bdbf";
        const bgColorEl = document.getElementById("theme-bg-color");
        if (bgColorEl) bgColorEl.value = settings.customBgColor || "";
        // Show filename if a bg image was previously set
        const previewInfo = document.getElementById("bg-preview-info");
        const previewName = document.getElementById("bg-preview-name");
        if (previewInfo && previewName) {
            if (settings.bgImage) {
                previewName.textContent = "Image loaded";
                previewInfo.style.display = "block";
            } else {
                previewInfo.style.display = "none";
            }
        }
        if (customizerModal) customizerModal.classList.add("active");
    };
    const customizerBtn = document.getElementById("customizer-btn");
    const customizerBtn2 = document.getElementById("customizer-btn2");
    if (customizerBtn) customizerBtn.addEventListener("click", openCustomizer);
    if (customizerBtn2) customizerBtn2.addEventListener("click", openCustomizer);

    // Color Presets
    document.querySelectorAll(".color-preset").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const hex = e.currentTarget.getAttribute("data-color");
            const accentInput = document.getElementById("theme-accent-color");
            if (accentInput) accentInput.value = hex;
            // Update active highlight on presets
            document.querySelectorAll(".color-preset").forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
        });
    });

    // Eyedropper custom color input
    const accentColorInput = document.getElementById("theme-accent-color");
    const eyedropperLabel = document.querySelector(".color-eyedropper-btn");
    if (eyedropperLabel && accentColorInput) {
        eyedropperLabel.addEventListener("click", () => {
            accentColorInput.style.pointerEvents = "auto";
            accentColorInput.click();
            accentColorInput.style.pointerEvents = "none";
        });
        accentColorInput.addEventListener("input", () => {
            // Deselect preset swatches when custom color is picked
            document.querySelectorAll(".color-preset").forEach(b => b.classList.remove("active"));
            // Show picked color on eyedropper
            eyedropperLabel.style.backgroundColor = accentColorInput.value;
            eyedropperLabel.style.color = "#000";
        });
    }

    // Background Image upload triggers — store base64 in a module-level variable
    const uploadBgBtn = document.getElementById("upload-bg-btn");
    const bgFileInput = document.getElementById("bg-file-input");
    if (uploadBgBtn && bgFileInput) {
        uploadBgBtn.addEventListener("click", () => bgFileInput.click());
        bgFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    // Store base64 in appData immediately so save can read it
                    if (!appData.themeSettings) appData.themeSettings = {};
                    appData.themeSettings.pendingBgImage = evt.target.result;
                    // Show preview info
                    const previewInfo = document.getElementById("bg-preview-info");
                    const previewName = document.getElementById("bg-preview-name");
                    if (previewInfo && previewName) {
                        previewName.textContent = file.name;
                        previewInfo.style.display = "block";
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const clearBgBtn = document.getElementById("clear-bg-btn");
    if (clearBgBtn) {
        clearBgBtn.addEventListener("click", () => {
            if (bgFileInput) bgFileInput.value = "";
            // Clear both pending and saved bgImage
            if (!appData.themeSettings) appData.themeSettings = {};
            appData.themeSettings.pendingBgImage = "";
            appData.themeSettings.bgImage = "";
            // Apply immediately so user sees the change
            applyCustomTheme();
            const previewInfo = document.getElementById("bg-preview-info");
            if (previewInfo) previewInfo.style.display = "none";
        });
    }

    const saveThemeBtn = document.getElementById("save-theme-btn");
    if (saveThemeBtn) {
        saveThemeBtn.addEventListener("click", () => {
            const accent = document.getElementById("theme-accent-color").value;
            const bgColorEl = document.getElementById("theme-bg-color");
            const bgCol = bgColorEl ? bgColorEl.value.trim() : "";
            // Use pendingBgImage if uploaded, else keep existing bgImage
            const pending = appData.themeSettings && appData.themeSettings.pendingBgImage;
            const existing = appData.themeSettings && appData.themeSettings.bgImage;
            const bgImg = (pending !== undefined) ? pending : (existing || "");
            
            appData.themeSettings = {
                accentColor: accent,
                customBgColor: bgCol,
                bgImage: bgImg
            };
            
            const isVi = appData.lang === "vi";
            saveState(isVi ? "Tùy chỉnh giao diện" : "Customized theme");
            applyCustomTheme();
            
            const modal = document.getElementById("customizer-modal");
            if (modal) modal.classList.remove("active");
        });
    }

    // Sidebar toggle
    const appContainer = document.querySelector(".app-container");
    const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
    const sidebarOpenTab = document.getElementById("sidebar-open-tab");
    if (sidebarToggleBtn && appContainer) {
        sidebarToggleBtn.addEventListener("click", () => {
            appContainer.classList.add("sidebar-collapsed");
        });
    }
    if (sidebarOpenTab && appContainer) {
        sidebarOpenTab.addEventListener("click", () => {
            appContainer.classList.remove("sidebar-collapsed");
        });
    }
}

// Render Core Elements
function renderAll() {
    // Fill text inputs
    document.getElementById("profile-title").value = appData.profile.title || "";
    document.getElementById("profile-start-date").value = appData.profile.startDate || "";
    document.getElementById("vision-text").value = appData.vision || "";
    document.getElementById("target-role-text").value = appData.targetRole || "";

    renderAvatar();
    renderPromotions();
    renderJobDescription();
    renderStrengths();
    renderGrowths();
    renderSkills();
    renderGoals();
    renderCourses();
    renderMetrics();
    renderChart();
    renderHistoryTab();
}

function renderAvatar() {
    const box = document.getElementById("avatar-preview-box");
    if (!box) return;
    
    if (appData.profile && appData.profile.avatar) {
        box.innerHTML = `<img src="${appData.profile.avatar}" alt="Avatar">`;
    } else {
        box.innerHTML = `<i data-lucide="camera" class="camera-icon"></i>`;
        lucide.createIcons();
    }
}

// Render Metrics Header
function renderMetrics() {
    // Goal Completion %
    const totalGoals = appData.goals.length;
    const completedGoals = appData.goals.filter(g => g.status === "Completed").length;
    const pct = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;
    
    document.getElementById("goals-progress-percent").innerText = `${pct}%`;

    // Dynamically adjust Goals Completed card color category
    const goalCard = document.querySelector(".metrics-grid .metric-card:first-child");
    if (goalCard) {
        goalCard.classList.remove("positive", "warning", "info");
        if (pct >= 70) {
            goalCard.classList.add("positive"); // Green (> 70%)
        } else if (pct >= 30) {
            goalCard.classList.add("info");     // Blue (30% - 70%)
        } else {
            goalCard.classList.add("warning");  // Red (< 30%)
        }
    }

    // Active Courses
    const activeCourses = appData.courses.filter(c => c.status === "In progress").length;
    document.getElementById("active-courses-count").innerText = activeCourses;

    // Critical Gaps (Required level > Current level)
    let gaps = 0;
    appData.skills.forEach(s => {
        const currNum = parseInt(s.current.split("")[0]) || 0;
        const reqNum = parseInt(s.required.split("")[0]) || 0;
        if (reqNum > currNum) gaps++;
    });
    document.getElementById("critical-gaps-count").innerText = gaps;
}

// Render Promotions
function renderPromotions() {
    const list = document.getElementById("promotions-list");
    list.innerHTML = "";
    appData.profile.promotions.forEach((p, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${p}</span>
            <button class="icon-btn delete-btn btn-sm" onclick="deletePromotion(${idx})" title="Delete Promo history">
                <i data-lucide="trash-2" style="width: 14px; height: 14px; color: var(--accent-red)"></i>
            </button>
        `;
        list.appendChild(li);
    });
    lucide.createIcons();
}

function deletePromotion(idx) {
    const isVi = appData.lang === "vi";
    appData.profile.promotions.splice(idx, 1);
    saveState(isVi ? "Xóa lịch sử thăng tiến" : "Deleted promotion history");
    renderPromotions();
}

// Render Job Descriptions
function renderJobDescription() {
    const list = document.getElementById("jd-list");
    list.innerHTML = "";
    appData.jobResponsibilities.forEach((jd, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${jd}</span>
            <button class="icon-btn delete-jd-btn btn-sm" onclick="deleteJobDescription(${idx})" title="Delete responsibility">
                <i data-lucide="trash-2" style="width: 14px; height: 14px; color: var(--accent-red)"></i>
            </button>
        `;
        list.appendChild(li);
    });
    lucide.createIcons();
}

function deleteJobDescription(idx) {
    const isVi = appData.lang === "vi";
    appData.jobResponsibilities.splice(idx, 1);
    saveState(isVi ? "Xóa trách nhiệm công việc" : "Deleted job responsibility");
    renderJobDescription();
}

// Render Strengths Table
function renderStrengths() {
    const tbody = document.querySelector("#strengths-table tbody");
    tbody.innerHTML = "";
    const isVi = appData.lang === "vi";
    appData.strengths.forEach(s => {
        const tr = document.createElement("tr");
        
        const tdStrength = document.createElement("td");
        const divStrength = document.createElement("div");
        divStrength.contentEditable = "true";
        divStrength.className = "editable-cell";
        divStrength.innerText = s.strength;
        divStrength.addEventListener("blur", () => updateStrength(s.id, 'strength', divStrength.innerText));
        tdStrength.appendChild(divStrength);
        
        const tdDetails = document.createElement("td");
        const divDetails = document.createElement("div");
        divDetails.contentEditable = "true";
        divDetails.className = "editable-cell";
        divDetails.innerText = s.details;
        divDetails.addEventListener("blur", () => updateStrength(s.id, 'details', divDetails.innerText));
        tdDetails.appendChild(divDetails);
        
        const tdActions = document.createElement("td");
        tdActions.className = "col-actions";
        tdActions.innerHTML = `
            <button class="icon-btn" onclick="deleteStrength('${s.id}')" title="${isVi ? 'Xóa dòng' : 'Delete row'}">
                <i data-lucide="trash-2" style="width: 16px; height: 16px; color: var(--accent-red);"></i>
            </button>
        `;
        
        tr.appendChild(tdStrength);
        tr.appendChild(tdDetails);
        tr.appendChild(tdActions);
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function updateStrength(id, key, val) {
    const idx = appData.strengths.findIndex(s => s.id === id);
    if (idx !== -1) {
        if (appData.strengths[idx][key] !== val) {
            const isVi = appData.lang === "vi";
            appData.strengths[idx][key] = val;
            saveState(isVi ? "Cập nhật thế mạnh" : "Updated strength details");
        }
    }
}

function deleteStrength(id) {
    const isVi = appData.lang === "vi";
    appData.strengths = appData.strengths.filter(s => s.id !== id);
    saveState(isVi ? "Xóa dòng thế mạnh" : "Deleted strength row");
    renderStrengths();
}

// Render Growth Areas Table
function renderGrowths() {
    const tbody = document.querySelector("#growths-table tbody");
    tbody.innerHTML = "";
    const isVi = appData.lang === "vi";
    appData.growthAreas.forEach(g => {
        const tr = document.createElement("tr");
        
        const tdGrowth = document.createElement("td");
        const divGrowth = document.createElement("div");
        divGrowth.contentEditable = "true";
        divGrowth.className = "editable-cell";
        divGrowth.innerText = g.growthArea;
        divGrowth.addEventListener("blur", () => updateGrowth(g.id, 'growthArea', divGrowth.innerText));
        tdGrowth.appendChild(divGrowth);
        
        const tdDetails = document.createElement("td");
        const divDetails = document.createElement("div");
        divDetails.contentEditable = "true";
        divDetails.className = "editable-cell";
        divDetails.innerText = g.details;
        divDetails.addEventListener("blur", () => updateGrowth(g.id, 'details', divDetails.innerText));
        tdDetails.appendChild(divDetails);
        
        const tdActions = document.createElement("td");
        tdActions.className = "col-actions";
        tdActions.innerHTML = `
            <button class="icon-btn" onclick="deleteGrowth('${g.id}')" title="${isVi ? 'Xóa dòng' : 'Delete row'}">
                <i data-lucide="trash-2" style="width: 16px; height: 16px; color: var(--accent-red);"></i>
            </button>
        `;
        
        tr.appendChild(tdGrowth);
        tr.appendChild(tdDetails);
        tr.appendChild(tdActions);
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function updateGrowth(id, key, val) {
    const idx = appData.growthAreas.findIndex(g => g.id === id);
    if (idx !== -1) {
        if (appData.growthAreas[idx][key] !== val) {
            const isVi = appData.lang === "vi";
            appData.growthAreas[idx][key] = val;
            saveState(isVi ? "Cập nhật cơ hội phát triển" : "Updated growth area details");
        }
    }
}

// Render Skills Table
function renderSkills() {
    const tbody = document.querySelector("#skills-table tbody");
    tbody.innerHTML = "";
    const isVi = appData.lang === "vi";

    let filtered = appData.skills || [];
    if (tableFilters.skillSearch) {
        const query = tableFilters.skillSearch.toLowerCase();
        filtered = filtered.filter(s => 
            s.name.toLowerCase().includes(query) || 
            (s.gap && s.gap.toLowerCase().includes(query)) || 
            (s.notes && s.notes.toLowerCase().includes(query))
        );
    }
    if (tableFilters.skillGap === "gap") {
        filtered = filtered.filter(s => {
            const currNum = parseInt(s.current.split("")[0]) || 0;
            const reqNum = parseInt(s.required.split("")[0]) || 0;
            return reqNum > currNum;
        });
    } else if (tableFilters.skillGap === "no-gap") {
        filtered = filtered.filter(s => {
            const currNum = parseInt(s.current.split("")[0]) || 0;
            const reqNum = parseInt(s.required.split("")[0]) || 0;
            return currNum >= reqNum;
        });
    }

    filtered.forEach(s => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="font-weight: 600; color: var(--text-primary);">${s.name}</td>
            <td><span class="badge badge-level">${translateLevel(s.current)}</span></td>
            <td><span class="badge badge-level-req">${translateLevel(s.required)}</span></td>
            <td>${s.gap || `<span style="color: var(--text-muted);">${isVi ? 'Không có' : 'None'}</span>`}</td>
            <td>${s.notes || ''}</td>
            <td class="col-actions">
                <div style="display: flex; gap: 0.5rem; justify-content: center; align-items: center;">
                    <button class="icon-btn" onclick="openSkillModal('${s.id}')" title="${isVi ? 'Chỉnh sửa' : 'Edit skill'}">
                        <i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--accent-teal);"></i>
                    </button>
                    <button class="icon-btn" onclick="deleteSkill('${s.id}')" title="${isVi ? 'Xóa' : 'Delete skill'}">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px; color: var(--accent-red);"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
    renderMetrics();
}

function deleteSkill(id) {
    const isVi = appData.lang === "vi";
    appData.skills = appData.skills.filter(s => s.id !== id);
    saveState(isVi ? "Xóa kỹ năng" : "Deleted skill gap entry");
    renderSkills();
}

function deleteGrowth(id) {
    const isVi = appData.lang === "vi";
    appData.growthAreas = appData.growthAreas.filter(g => g.id !== id);
    saveState(isVi ? "Xóa cơ hội phát triển" : "Deleted growth area row");
    renderGrowths();
}

// Render Goals Table
function renderGoals() {
    const tbody = document.querySelector("#goals-table tbody");
    tbody.innerHTML = "";
    const isVi = appData.lang === "vi";

    let filtered = appData.goals || [];
    if (tableFilters.goalSearch) {
        const query = tableFilters.goalSearch.toLowerCase();
        filtered = filtered.filter(g => 
            g.title.toLowerCase().includes(query) || 
            (g.notes && g.notes.toLowerCase().includes(query))
        );
    }
    if (tableFilters.goalStatus !== "all") {
        filtered = filtered.filter(g => g.status === tableFilters.goalStatus);
    }

    filtered.forEach(g => {
        const tr = document.createElement("tr");
        const statusClass = g.status.toLowerCase().replace(" ", "-");
        tr.innerHTML = `
            <td style="font-weight: 500;">${g.title}</td>
            <td><span class="badge badge-status ${statusClass}">${translateStatus(g.status)}</span></td>
            <td style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">${g.deadline || '<span style="color: var(--text-muted)">--</span>'}</td>
            <td>${g.notes || ''}</td>
            <td class="col-actions">
                <div style="display: flex; gap: 0.5rem; justify-content: center; align-items: center;">
                    <button class="icon-btn" onclick="openGoalModal('${g.id}')" title="${isVi ? 'Chỉnh sửa' : 'Edit goal'}">
                        <i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--accent-teal);"></i>
                    </button>
                    <button class="icon-btn" onclick="deleteGoal('${g.id}')" title="${isVi ? 'Xóa' : 'Delete goal'}">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px; color: var(--accent-red);"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
    renderMetrics();
}

function deleteGoal(id) {
    const isVi = appData.lang === "vi";
    appData.goals = appData.goals.filter(g => g.id !== id);
    saveState(isVi ? "Xóa mục tiêu" : "Deleted goal milestone");
    renderGoals();
}

// Render Courses Table
function renderCourses() {
    const tbody = document.querySelector("#courses-table tbody");
    tbody.innerHTML = "";
    const isVi = appData.lang === "vi";

    let filtered = appData.courses || [];
    if (tableFilters.courseSearch) {
        const query = tableFilters.courseSearch.toLowerCase();
        filtered = filtered.filter(c => c.name.toLowerCase().includes(query));
    }
    if (tableFilters.courseStatus !== "all") {
        filtered = filtered.filter(c => c.status === tableFilters.courseStatus);
    }

    filtered.forEach(c => {
        const tr = document.createElement("tr");
        const statusClass = c.status.toLowerCase().replace(" ", "-");
        tr.innerHTML = `
            <td style="font-weight: 500;">${c.name}</td>
            <td><span class="badge badge-status ${statusClass}">${translateStatus(c.status)}</span></td>
            <td class="col-actions">
                <div style="display: flex; gap: 0.5rem; justify-content: center; align-items: center;">
                    <button class="icon-btn" onclick="openCourseModal('${c.id}')" title="${isVi ? 'Chỉnh sửa' : 'Edit course'}">
                        <i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--accent-teal);"></i>
                    </button>
                    <button class="icon-btn" onclick="deleteCourse('${c.id}')" title="${isVi ? 'Xóa' : 'Delete course'}">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px; color: var(--accent-red);"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
    renderMetrics();
}

function deleteCourse(id) {
    const isVi = appData.lang === "vi";
    appData.courses = appData.courses.filter(c => c.id !== id);
    saveState(isVi ? "Xóa khóa học" : "Deleted course program");
    renderCourses();
}

function renderHistoryTab() {
    const list = document.getElementById("history-timeline-list");
    if (!list) return;
    list.innerHTML = "";
    
    const isVi = appData.lang === "vi";
    const currentStateStr = JSON.stringify(appData);
    
    if (stateHistory.length === 0) {
        list.innerHTML = `<p style="font-size: 0.9rem; color: var(--text-muted); text-transform: none; text-align: center; padding: 2rem 0;">${isVi ? 'Chưa có hoạt động nào được ghi lại' : 'No activity logged yet.'}</p>`;
        return;
    }
    
    // Render in reverse order (newest first)
    [...stateHistory].reverse().forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        
        // Check if this history state matches current app state loosely
        const itemObj = JSON.parse(item.state);
        const isActive = JSON.stringify(itemObj.skills) === JSON.stringify(appData.skills) && 
                         JSON.stringify(itemObj.goals) === JSON.stringify(appData.goals) && 
                         JSON.stringify(itemObj.courses) === JSON.stringify(appData.courses) &&
                         itemObj.vision === appData.vision && 
                         itemObj.targetRole === appData.targetRole &&
                         itemObj.profile.title === appData.profile.title;
        
        if (isActive) {
            div.classList.add("active");
        }
        
        div.innerHTML = `
            <div class="timeline-info">
                <span class="timeline-time">${item.timestamp}</span>
                <span class="timeline-desc">${item.description}</span>
            </div>
            <div class="timeline-actions">
                ${isActive 
                    ? `<span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-color);">${isVi ? 'ĐANG DÙNG' : 'ACTIVE'}</span>` 
                    : `<button class="btn btn-sm" onclick="restoreHistoryState('${item.id}')">${isVi ? 'Khôi phục' : 'Restore'}</button>`
                }
            </div>
        `;
        list.appendChild(div);
    });
}

function restoreHistoryState(id) {
    const item = stateHistory.find(h => h.id === id);
    if (item) {
        const isVi = appData.lang === "vi";
        
        // Push current state to undo stack before restoring
        undoStack.push(JSON.stringify(appData));
        if (undoStack.length > MAX_HISTORY) {
            undoStack.shift();
        }
        
        appData = JSON.parse(item.state);
        saveData();
        
        // Add restoration entry to history log
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        stateHistory.push({
            id: 'h_' + Date.now(),
            timestamp: timeStr,
            description: isVi 
                ? `Khôi phục về trạng thái: ${item.description}` 
                : `Restored to state: ${item.description}`,
            state: item.state
        });
        if (stateHistory.length > 30) {
            stateHistory.shift();
        }
        localStorage.setItem("jolies_space_history", JSON.stringify(stateHistory));
        
        renderAll();
        
        // Update inputs values on screen
        document.getElementById("profile-title").value = appData.profile.title || "";
        document.getElementById("profile-start-date").value = appData.profile.startDate || "";
        document.getElementById("vision-text").value = appData.vision || "";
        document.getElementById("target-role-text").value = appData.targetRole || "";
        
        renderHistoryTab();
    }
}

function clearHistory() {
    const isVi = appData.lang === "vi";
    const confirmMsg = isVi 
        ? "Bạn có chắc muốn xóa sạch toàn bộ lịch sử hoạt động không?"
        : "Are you sure you want to clear all activity history log?";
    if (confirm(confirmMsg)) {
        stateHistory = [{
            id: 'h_init',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            description: isVi ? "Khởi tạo kế hoạch" : "Initial plan load",
            state: JSON.stringify(appData)
        }];
        localStorage.setItem("jolies_space_history", JSON.stringify(stateHistory));
        undoStack = [JSON.stringify(appData)];
        redoStack = [];
        renderHistoryTab();
    }
}

// Generate beautiful share card PNG image client-side via HTML Canvas
function generateShareCard() {
    const isVi = appData.lang === "vi";
    const roleValue = (appData.profile.title || "MARKETING LEAD").toUpperCase();
    
    const avatarSrc = appData.profile.avatar;
    if (avatarSrc) {
        const img = new Image();
        img.onload = () => {
            drawShareCardCanvas(img, isVi, roleValue);
        };
        img.src = avatarSrc;
    } else {
        drawShareCardCanvas(null, isVi, roleValue);
    }
}

function drawShareCardCanvas(avatarImg, isVi, roleValue) {
    const canvas = document.createElement("canvas");
    canvas.width = 2400;
    canvas.height = 1260;
    const ctx = canvas.getContext("2d");
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    
    const bgCol = isDark ? "#0f0f0f" : "#fcfcfc";
    const textCol = isDark ? "#ffffff" : "#000000";
    const accentCol = "#28bdbf"; // GSM Xanh SM
    const borderCol = isDark ? "#ffffff" : "#000000";
    const gridDotCol = isDark ? "#2a2a2a" : "#e0e0e0";
    
    ctx.fillStyle = bgCol;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = gridDotCol;
    const dotSpacing = 50;
    for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 32;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);
    
    ctx.fillStyle = accentCol;
    ctx.fillRect(80, 80, 32, canvas.height - 160);
    
    ctx.fillStyle = textCol;
    ctx.font = "bold 96px 'Oswald', sans-serif";
    ctx.textBaseline = "top";
    const titleText = isVi ? "KẾ HOẠCH PHÁT TRIỂN SỰ NGHIỆP" : "MY CAREER DEVELOPMENT PLAN";
    ctx.fillText(titleText.toUpperCase(), 160, 100);
    
    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(160, 250);
    ctx.lineTo(2240, 250);
    ctx.stroke();
    
    const roleLabel = isVi ? "VAI TRÒ: " : "ROLE: ";
    ctx.fillStyle = accentCol;
    ctx.font = "bold 76px 'Oswald', sans-serif";
    ctx.fillText(roleLabel + roleValue, 160, 300);
    
    if (avatarImg) {
        const avSize = 160;
        const avX = 2050;
        const avY = 70;
        
        ctx.fillStyle = borderCol;
        ctx.fillRect(avX + 12, avY + 12, avSize, avSize);
        
        ctx.fillStyle = isDark ? "#161616" : "#ffffff";
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 6;
        ctx.fillRect(avX, avY, avSize, avSize);
        ctx.strokeRect(avX, avY, avSize, avSize);
        
        ctx.drawImage(avatarImg, avX + 4, avY + 4, avSize - 8, avSize - 8);
    }
    
    const totalGoals = appData.goals.length;
    const completedGoals = appData.goals.filter(g => g.status === "Completed").length;
    const pct = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;
    
    const activeCourses = appData.courses.filter(c => c.status === "In progress").length;
    
    let gaps = 0;
    appData.skills.forEach(s => {
        const currNum = parseInt(s.current.split("")[0]) || 0;
        const reqNum = parseInt(s.required.split("")[0]) || 0;
        if (reqNum > currNum) gaps++;
    });
    
    const stats = [
        { 
            label: isVi ? "TIẾN ĐỘ MỤC TIÊU" : "GOALS COMPLETED", 
            val: `${pct}%`,
            color: "#34c759"
        },
        { 
            label: isVi ? "KHÓA HỌC ĐANG HỌC" : "ACTIVE COURSES", 
            val: `${activeCourses}`,
            color: accentCol
        },
        { 
            label: isVi ? "THIẾU HỤT KỸ NĂNG" : "CRITICAL SKILL GAPS", 
            val: `${gaps}`,
            color: "#ff3b30"
        }
    ];
    
    const startX = 160;
    const startY = 460;
    const boxW = 640;
    const boxH = 440;
    const gap = 80;
    
    stats.forEach((stat, i) => {
        const x = startX + i * (boxW + gap);
        const y = startY;
        
        ctx.fillStyle = borderCol;
        ctx.fillRect(x + 16, y + 16, boxW, boxH);
        
        ctx.fillStyle = isDark ? "#161616" : "#ffffff";
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 8;
        ctx.fillRect(x, y, boxW, boxH);
        ctx.strokeRect(x, y, boxW, boxH);
        
        ctx.fillStyle = stat.color;
        ctx.fillRect(x, y, boxW, 24);
        
        ctx.fillStyle = textCol;
        ctx.font = "bold 160px 'Oswald', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(stat.val, x + boxW / 2, y + 80);
        
        ctx.fillStyle = isDark ? "#aaaaaa" : "#444444";
        ctx.font = "bold 38px 'Oswald', sans-serif";
        ctx.fillText(stat.label.toUpperCase(), x + boxW / 2, y + 300);
        ctx.textAlign = "left";
    });
    
    ctx.fillStyle = isDark ? "#777777" : "#888888";
    ctx.font = "italic 36px 'Oswald', sans-serif";
    const watermarkText = isVi 
        ? "Được tạo bởi JB - Lộ trình thăng tiến sự nghiệp"
        : "Generated by JB - Career Growth Roadmap";
    ctx.fillText(watermarkText.toUpperCase(), 160, 1040);
    
    ctx.strokeStyle = accentCol;
    ctx.lineWidth = 8;
    ctx.save();
    ctx.translate(2040, 1000);
    ctx.rotate(-12 * Math.PI / 180);
    
    ctx.strokeRect(-260, -90, 520, 180);
    ctx.lineWidth = 4;
    ctx.strokeRect(-248, -78, 496, 156);
    
    ctx.fillStyle = accentCol;
    ctx.font = "bold 56px 'Oswald', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GROWTH MINDSET", 0, -44);
    ctx.font = "bold 36px 'Oswald', sans-serif";
    ctx.fillText(isVi ? "TƯ DUY PHÁT TRIỂN" : "CERTIFIED USER", 0, 28);
    ctx.restore();
    
    const link = document.createElement("a");
    link.download = `JolieSpace_${roleValue.replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// Modal open scripts
function openSkillModal(id = null) {
    const modal = document.getElementById("skill-modal");
    const modalTitle = document.getElementById("skill-modal-title");
    const t = TRANSLATIONS[appData.lang || "en"];

    // Set dynamic dropdown options for localized strings
    const currentSelect = document.getElementById("skill-current");
    const requiredSelect = document.getElementById("skill-required");
    
    const levels = ["1 - Beginner", "2 - Intermediate", "3 - Proficient", "4 - Advanced", "5 - Expert"];
    
    currentSelect.innerHTML = "";
    requiredSelect.innerHTML = "";
    levels.forEach(lvl => {
        const optText = translateLevel(lvl);
        currentSelect.innerHTML += `<option value="${lvl}">${optText}</option>`;
        requiredSelect.innerHTML += `<option value="${lvl}">${optText}</option>`;
    });
    
    // Clear inputs
    document.getElementById("skill-id").value = "";
    document.getElementById("skill-name").value = "";
    document.getElementById("skill-current").value = "1 - Beginner";
    document.getElementById("skill-required").value = "1 - Beginner";
    document.getElementById("skill-gap").value = "";
    document.getElementById("skill-notes").value = "";

    if (id) {
        const s = appData.skills.find(sk => sk.id === id);
        if (s) {
            modalTitle.innerText = t.modal_edit_skill;
            document.getElementById("skill-id").value = s.id;
            document.getElementById("skill-name").value = s.name;
            document.getElementById("skill-current").value = s.current;
            document.getElementById("skill-required").value = s.required;
            document.getElementById("skill-gap").value = s.gap || "";
            document.getElementById("skill-notes").value = s.notes || "";
        }
    } else {
        modalTitle.innerText = t.modal_add_skill;
    }
    
    modal.classList.add("active");
}

function handleSkillSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("skill-id").value;
    const name = document.getElementById("skill-name").value;
    const current = document.getElementById("skill-current").value;
    const required = document.getElementById("skill-required").value;
    const gap = document.getElementById("skill-gap").value;
    const notes = document.getElementById("skill-notes").value;

    if (id) {
        // Edit mode
        const idx = appData.skills.findIndex(s => s.id === id);
        if (idx !== -1) {
            appData.skills[idx] = { id, name, current, required, gap, notes };
        }
    } else {
        // Add mode
        appData.skills.push({
            id: 'sk_' + Date.now(),
            name, current, required, gap, notes
        });
    }

    const isVi = appData.lang === "vi";
    saveState(isVi ? `Lưu kỹ năng: ${name}` : `Saved skill: ${name}`);
    document.getElementById("skill-modal").classList.remove("active");
    renderSkills();
    renderChart();
}

function openGoalModal(id = null) {
    const modal = document.getElementById("goal-modal");
    const modalTitle = document.getElementById("goal-modal-title");
    const t = TRANSLATIONS[appData.lang || "en"];

    // Set dynamic dropdown options for localized status
    const statusSelect = document.getElementById("goal-status");
    const statuses = ["Not started", "In progress", "Completed"];
    statusSelect.innerHTML = "";
    statuses.forEach(st => {
        statusSelect.innerHTML += `<option value="${st}">${translateStatus(st)}</option>`;
    });

    // Clear inputs
    document.getElementById("goal-id").value = "";
    document.getElementById("goal-title").value = "";
    document.getElementById("goal-status").value = "Not started";
    document.getElementById("goal-deadline").value = "";
    document.getElementById("goal-notes").value = "";

    if (id) {
        const g = appData.goals.find(goal => goal.id === id);
        if (g) {
            modalTitle.innerText = t.modal_edit_goal;
            document.getElementById("goal-id").value = g.id;
            document.getElementById("goal-title").value = g.title;
            document.getElementById("goal-status").value = g.status;
            document.getElementById("goal-deadline").value = g.deadline || "";
            document.getElementById("goal-notes").value = g.notes || "";
        }
    } else {
        modalTitle.innerText = t.modal_add_goal;
    }

    modal.classList.add("active");
}

function handleGoalSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("goal-id").value;
    const title = document.getElementById("goal-title").value;
    const status = document.getElementById("goal-status").value;
    const deadline = document.getElementById("goal-deadline").value;
    const notes = document.getElementById("goal-notes").value;

    if (id) {
        const idx = appData.goals.findIndex(g => g.id === id);
        if (idx !== -1) {
            appData.goals[idx] = { id, title, status, deadline, notes };
        }
    } else {
        appData.goals.push({
            id: 'go_' + Date.now(),
            title, status, deadline, notes
        });
    }

    const isVi = appData.lang === "vi";
    saveState(isVi ? `Lưu mục tiêu: ${title}` : `Saved goal: ${title}`);
    document.getElementById("goal-modal").classList.remove("active");
    renderGoals();
}

function openCourseModal(id = null) {
    const modal = document.getElementById("course-modal");
    const modalTitle = document.getElementById("course-modal-title");
    const t = TRANSLATIONS[appData.lang || "en"];

    // Set dynamic dropdown options for localized status
    const statusSelect = document.getElementById("course-status");
    const statuses = ["Not started", "In progress", "Completed"];
    statusSelect.innerHTML = "";
    statuses.forEach(st => {
        statusSelect.innerHTML += `<option value="${st}">${translateStatus(st)}</option>`;
    });

    document.getElementById("course-id").value = "";
    document.getElementById("course-name").value = "";
    document.getElementById("course-status").value = "Not started";

    if (id) {
        const c = appData.courses.find(course => course.id === id);
        if (c) {
            modalTitle.innerText = t.modal_edit_course;
            document.getElementById("course-id").value = c.id;
            document.getElementById("course-name").value = c.name;
            document.getElementById("course-status").value = c.status;
        }
    } else {
        modalTitle.innerText = t.modal_add_course;
    }

    modal.classList.add("active");
}

function handleCourseSubmit(e) {
    e.preventDefault();
    const id = document.getElementById("course-id").value;
    const name = document.getElementById("course-name").value;
    const status = document.getElementById("course-status").value;

    if (id) {
        const idx = appData.courses.findIndex(c => c.id === id);
        if (idx !== -1) {
            appData.courses[idx] = { id, name, status };
        }
    } else {
        appData.courses.push({
            id: 'c_' + Date.now(),
            name, status
        });
    }

    const isVi = appData.lang === "vi";
    saveState(isVi ? `Lưu khóa học: ${name}` : `Saved course: ${name}`);
    document.getElementById("course-modal").classList.remove("active");
    renderCourses();
}

// Chart.js Visualization
function renderChart() {
    const canvas = document.getElementById("skillsChart");
    if (!canvas) return;
    
    // Destroy existing chart if it exists
    if (skillsChart) {
        skillsChart.destroy();
    }

    const currentTheme = document.documentElement.getAttribute("data-theme");
    const isDark = currentTheme === "dark";
    const isVi = appData.lang === "vi";
    
    // Theme Colors config
    const textCol = isDark ? "#ffffff" : "#000000";
    const gridCol = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)";
    
    const labelData = appData.skills.map(s => s.name);
    const currentLevels = appData.skills.map(s => parseInt(s.current.split("")[0]) || 0);
    const requiredLevels = appData.skills.map(s => parseInt(s.required.split("")[0]) || 0);

    // If there are less than 3 skills, Radar charts don't look good. Fallback to Bar chart.
    const chartType = labelData.length >= 3 ? "radar" : "bar";

    const data = {
        labels: labelData,
        datasets: [
            {
                label: isVi ? "Cấp độ hiện tại" : "Current Level",
                data: currentLevels,
                backgroundColor: "rgba(40, 189, 191, 0.25)",
                borderColor: "#28bdbf",
                borderWidth: 2,
                pointBackgroundColor: "#28bdbf",
                pointBorderColor: isDark ? "#000000" : "#ffffff",
                pointHoverBackgroundColor: isDark ? "#000000" : "#ffffff",
                pointHoverBorderColor: "#28bdbf"
            },
            {
                label: isVi ? "Cấp độ yêu cầu" : "Required Level",
                data: requiredLevels,
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                borderColor: "#888888",
                borderWidth: 2,
                pointBackgroundColor: "#888888",
                pointBorderColor: isDark ? "#000000" : "#ffffff",
                pointHoverBackgroundColor: isDark ? "#000000" : "#ffffff",
                pointHoverBorderColor: "#888888"
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: textCol,
                    font: {
                        family: 'Outfit',
                        weight: '600'
                    }
                }
            },
            tooltip: {
                titleFont: { family: 'Outfit', size: 14 },
                bodyFont: { family: 'Outfit', size: 13 }
            }
        },
        scales: chartType === "radar" ? {
            r: {
                angleLines: {
                    color: gridCol
                },
                grid: {
                    color: gridCol
                },
                pointLabels: {
                    color: textCol,
                    font: {
                        family: 'Outfit',
                        size: 11,
                        weight: '500'
                    }
                },
                ticks: {
                    display: false,
                    stepSize: 1
                },
                min: 0,
                max: 5
            }
        } : {
            y: {
                grid: {
                    color: gridCol
                },
                ticks: {
                    color: textCol,
                    stepSize: 1
                },
                min: 0,
                max: 5
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: textCol,
                    font: {
                        family: 'Outfit',
                        size: 10
                    }
                }
            }
        }
    };

    skillsChart = new Chart(canvas, {
        type: chartType,
        data: data,
        options: options
    });
}

// Backup Operations: Export JSON
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `career_development_plan_${appData.profile.title.toLowerCase().replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Backup Operations: Import JSON
function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const t = TRANSLATIONS[appData.lang || "en"];
    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const imported = JSON.parse(evt.target.result);
            
            // Simple validation structure
            if (imported.profile && imported.skills && imported.goals && imported.courses) {
                appData = imported;
                const isVi = appData.lang === "vi";
                saveState(isVi ? "Nhập dữ liệu kế hoạch mới" : "Imported new career plan data");
                updateUILanguage();
                renderAll();
                alert(t.msg_imported);
            } else {
                alert(t.msg_invalid);
            }
        } catch (err) {
            alert(t.msg_error + err.message);
        }
    };
    reader.readAsText(file);
}
