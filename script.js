const showSidebar = () => {
    document.querySelector('.sidebar').style.display = "flex";
    toggleSections("none");
};

const hideSidebar = () => {
    document.querySelector('.sidebar').style.display = "none";
    toggleSections("block");
};

const toggleSections = (displayStyle) => {
    const sections = [
        '.homeSection',
        '.strandSection',
        '.featured-section',
        '.enrollment-section',
        '.contact-section',
        'footer'
    ];
    sections.forEach(selector => {
        document.querySelector(selector).style.display = displayStyle;
    });
};

// Show sidebar
document.querySelector('.menubutton').addEventListener("click", showSidebar);

// Hide sidebar and show sections
document.querySelector('.hideButton').addEventListener("click", (e) => {
    e.preventDefault();
    hideSidebar();
});

// Show alert for under-maintenance button
document.querySelector('.send-button').addEventListener("click", (e) => {
    e.preventDefault();
    alert('This button is under maintenance');
});

// Elements that should hide sidebar and show all sections when clicked
const navItems = ['.home', '.aboutus', '.strandsoffered', '.enroll', '.contactus'];

navItems.forEach(item => {
    document.querySelector(item).addEventListener("click", hideSidebar);
});
