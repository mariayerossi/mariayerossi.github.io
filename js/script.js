window.addEventListener('load', function() {
    document.querySelector('.profile-pic').style.animation = 'fadeInLeft 1s forwards';
    document.querySelector('.intro p').style.animation = 'fadeInRight 1s forwards';
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideHamburger) {
            navLinks.classList.remove('active');
        }
    });
});

$(document).ready(function() {
    // Open sidebar and change content based on clicked skill
    $('.skill-item').on('click', function() {
        // Get the ID of the clicked skill
        var skillID = $(this).attr('id');
        
        // Change sidebar content based on the clicked skill
        if (skillID === 'skill1') {
            $('.sidebar-content').html('<h2>Business Skills</h2><ul><li>Project Management</li><li>Owner of Zhongwen Course</li><li>Social Media Marketing</li><li>Basic Accounting</li><li>Financial Management</li><li>E-Marketing</li></ul>');
        } else if (skillID === 'skill2') {
            $('.sidebar-content').html('<h2>Programming Skills</h2><ul><li>Python</li><li>Javascript</li><li>PHP</li><li>Laravel</li><li>Java</li><li>Database</li><li>HTML</li><li>CSS</li><li>Tailwind CSS</li><li>Bootstrap</li><li>Kotlin</li><li>C#</li><li>jQuery</li><li>SQL</li><li>GitHub</li><li>MVC Pattern</li><li>Activity Diagram</li><li>Use Case</li><li>CDM</li><li>PDM</li></ul>');
        } else if (skillID === 'skill3') {
            $('.sidebar-content').html('<h2>Design Skills</h2><ul><li>Canva</li><li>Blender</li><li>Adobe Photoshop<li>Adobe Illustrator</li></li></ul>');
        }
        
        // Open the sidebar
        $('#sidebar').addClass('active');
    });

    // Close sidebar
    $('#closeSidebar').on('click', function() {
        $('#sidebar').removeClass('active');
    });

    // Close sidebar when clicking outside of it
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#sidebar, .skill-item').length) {
            $('#sidebar').removeClass('active');
        }
    });

    $('.project-card').show();

    // Fungsi untuk menampilkan proyek berdasarkan kategori yang dipilih
    $('.filter-btn').click(function() {
        var filterValue = $(this).attr('data-filter');

        // Menampilkan proyek yang memiliki tag sesuai dengan filterValue
        $('.project-card').each(function() {
            if ($(this).attr('data-tags').includes(filterValue) || filterValue == 'all') {
                $(this).fadeIn(1000);
            } else {
                $(this).hide();
            }
        });

        // Menandai tombol filter yang aktif
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });
});
