import os

project_dir = "/Users/xxzwnm/.gemini/antigravity-ide/scratch/career-development-plan"

# Read files
with open(os.path.join(project_dir, "index.html"), "r", encoding="utf-8") as f:
    html_content = f.read()

with open(os.path.join(project_dir, "styles.css"), "r", encoding="utf-8") as f:
    css_content = f.read()

with open(os.path.join(project_dir, "app.js"), "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace CSS link
css_link = '<link rel="stylesheet" href="styles.css?v=2.4">'
embedded_css = f"<style>\n{css_content}\n</style>"
html_content = html_content.replace(css_link, embedded_css)

# Replace JS script tag
js_script = '<script src="app.js?v=2.7"></script>'
embedded_js = f"<script>\n{js_content}\n</script>"
html_content = html_content.replace(js_script, embedded_js)

# Write to standalone HTML
output_path = os.path.join(project_dir, "GrowthPlan_Standalone.html")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Bundled successfully! Standalone file created at: {output_path}")
