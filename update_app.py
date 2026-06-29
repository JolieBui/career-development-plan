import re

with open("app.js", "r") as f:
    content = f.read()

# Replace DEFAULT_DATA block
start_idx = content.find("const DEFAULT_DATA = {")
end_idx = content.find("};\n\n// Translation Dictionary") + 2

if start_idx != -1 and end_idx != -1:
    new_data = """const DEFAULT_DATA_EN = {
    profile: {
        title: "Marketing Lead",
        startDate: "2025-12-14",
        promotions: [
            "Marketing Manager - 03/2024 - 04/2025"
        ]
    },
    jobResponsibilities: [
        "Develop and execute marketing campaigns to drive top-of-funnel awareness",
        "Manage the company's digital footprint across social media and website"
    ],
    vision: "I want to transition from executing tactical campaigns to directing overall marketing strategy. Over the next 12-24 months, I aim to step into a Marketing Director role.",
    targetRole: "Marketing Director\\n- Oversee brand, product marketing, and user acquisition.\\n- Hire and mentor a content strategist and a growth specialist.",
    strengths: [
        { id: "s1", strength: "Writing & Thought Leadership", details: "Feedback on the conversion playbook was 95% positive." },
        { id: "s2", strength: "Strategic Campaign Execution", details: "Led the product launch campaign that reached 120% of targets." }
    ],
    growthAreas: [
        { id: "g1", growthArea: "Public Speaking & Workshop Facilitation", details: "Need practice to build our brand presence." },
        { id: "g2", growthArea: "Data Analytics & Funnel Attribution", details: "Need more practice setting up analytics to track campaigns." }
    ],
    skills: [
        { id: "sk1", name: "Clear Project Scoping", current: "4 - Advanced", required: "3 - Proficient", gap: "Level 4: Demonstrates the skill + guides others", notes: "Comfortable leading project scoping workshops." },
        { id: "sk2", name: "Data Analytics & Funnel Attribution", current: "2 - Intermediate", required: "4 - Advanced", gap: "Gap from Level 2 to Level 4", notes: "Focus on building HubSpot dashboards." }
    ],
    goals: [
        { id: "go1", title: "Set up unified campaign attribution funnel in HubSpot", status: "In progress", deadline: "2026-09-30", notes: "Working with ops to clean up marketing tags." },
        { id: "go2", title: "Launch new brand identity across all owned media", status: "Not started", deadline: "2026-11-30", notes: "Goal: new visual identity live in Nov." }
    ],
    courses: [
        { id: "c1", name: "Reforge Growth Series", status: "Completed" },
        { id: "c2", name: "HubSpot Attribution & Reporting Certification", status: "In progress" }
    ]
};

const DEFAULT_DATA_VI = {
    profile: {
        title: "Trưởng nhóm Marketing",
        startDate: "2025-12-14",
        promotions: [
            "Quản lý Marketing - 03/2024 - 04/2025"
        ]
    },
    jobResponsibilities: [
        "Phát triển và thực thi các chiến dịch marketing để tăng nhận diện thương hiệu",
        "Quản lý hình ảnh kỹ thuật số của công ty trên mạng xã hội và website"
    ],
    vision: "Tôi muốn chuyển từ việc thực thi các chiến dịch sang định hướng chiến lược marketing tổng thể. Trong 12-24 tháng tới, tôi hướng tới vị trí Giám đốc Marketing.",
    targetRole: "Giám đốc Marketing\\n- Giám sát thương hiệu, tiếp thị sản phẩm và thu hút người dùng.\\n- Tuyển dụng và hướng dẫn chuyên gia nội dung và chuyên gia tăng trưởng.",
    strengths: [
        { id: "s1", strength: "Viết lách & Lãnh đạo tư tưởng", details: "Phản hồi về cẩm nang chuyển đổi đạt 95% tích cực." },
        { id: "s2", strength: "Thực thi Chiến dịch Chiến lược", details: "Dẫn dắt chiến dịch ra mắt sản phẩm đạt 120% mục tiêu." }
    ],
    growthAreas: [
        { id: "g1", growthArea: "Thuyết trình & Điều phối Hội thảo", details: "Cần thực hành để xây dựng sự hiện diện thương hiệu." },
        { id: "g2", growthArea: "Phân tích Dữ liệu & Phễu chuyển đổi", details: "Cần thực hành thêm về thiết lập phân tích để theo dõi chiến dịch." }
    ],
    skills: [
        { id: "sk1", name: "Lập kế hoạch dự án rõ ràng", current: "4 - Advanced", required: "3 - Proficient", gap: "Cấp độ 4: Thể hiện kỹ năng + hướng dẫn người khác", notes: "Tự tin dẫn dắt các buổi lập kế hoạch dự án." },
        { id: "sk2", name: "Phân tích dữ liệu & Phễu chuyển đổi", current: "2 - Intermediate", required: "4 - Advanced", gap: "Khoảng cách từ Cấp độ 2 lên Cấp độ 4", notes: "Tập trung xây dựng bảng điều khiển HubSpot." }
    ],
    goals: [
        { id: "go1", title: "Thiết lập phễu theo dõi chiến dịch hợp nhất trên HubSpot", status: "In progress", deadline: "2026-09-30", notes: "Làm việc với bộ phận vận hành để dọn dẹp các thẻ marketing." },
        { id: "go2", title: "Ra mắt bộ nhận diện thương hiệu mới trên mọi phương tiện", status: "Not started", deadline: "2026-11-30", notes: "Mục tiêu: bộ nhận diện trực quan mới ra mắt vào tháng 11." }
    ],
    courses: [
        { id: "c1", name: "Khóa học Reforge Growth Series", status: "Completed" },
        { id: "c2", name: "Chứng chỉ Phân tích & Báo cáo HubSpot", status: "In progress" }
    ]
};

function get_DEFAULT_DATA(lang) {
    return lang === "vi" ? DEFAULT_DATA_VI : DEFAULT_DATA_EN;
}"""
    content = content[:start_idx] + new_data + content[end_idx:]

    # Replace usages
    content = re.sub(r'appData = JSON\.parse\(JSON\.stringify\(DEFAULT_DATA\)\);[\s\S]*?appData\.lang = "en";', 
                     'appData = JSON.parse(JSON.stringify(DEFAULT_DATA_EN));\n            appData.lang = "en";', 
                     content)
    content = re.sub(r'appData = JSON\.parse\(JSON\.stringify\(DEFAULT_DATA\)\);[\s\S]*?appData\.lang = currentLang;', 
                     'appData = JSON.parse(JSON.stringify(get_DEFAULT_DATA(currentLang)));\n        appData.lang = currentLang;', 
                     content)

    with open("app.js", "w") as f:
        f.write(content)
    print("Successfully updated app.js")
else:
    print("Could not find DEFAULT_DATA block")
