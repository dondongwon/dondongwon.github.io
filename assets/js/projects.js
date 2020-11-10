$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/pats.png',
            link: 'http://chahuja.com/pats/',
            title: 'PATS Dataset',
            demo: 'http://chahuja.com/pats/',
            technologies: ['Data Collection', 'Preprocessing', 'Data Cleaning'],
            description: "PATS was collected to study correlation of co-speech gestures with audio and text signals. The dataset consists of a diverse and large amount of aligned pose, audio and transcripts.",
            categories: ['featured', 'dataset']
        },
        {
            image: 'assets/images/eccv.png',
            link: 'http://chahuja.com/mix-stage/',
            title: 'Gesture Style Transfer',
            demo: 'http://chahuja.com/mix-stage/',
            technologies: ['ML', 'NLP', 'CV', 'Multi-Modal ML'],
            description: "Our work on Style Transfer for Co-Speech Gesture Animation: A Multi-Speaker Conditional-Mixture Approach, which was accepted to ECCV 2020",
            categories: ['featured', 'publications']
        },
        {
            image: 'assets/images/eccv.png',
            link: 'https://www.aclweb.org/anthology/2020.findings-emnlp.170.pdf',
            title: 'Language-Based Gestures',
            demo: 'https://www.aclweb.org/anthology/2020.findings-emnlp.170.pdf',
            technologies: ['ML', 'NLP', 'CV', 'Multi-Modal ML'],
            description: "Our work on No Gestures Left Behind: Learning Relationships between Spoken Language and Freeform Gestures, which was accepted to ECCV 2020",
            categories: ['featured', 'publications']
        },
        {
            image: 'assets/images/eccv.png',
            link: 'https://github.com/chahuja/mix-stage',
            title: 'Code Base for Gesture Style Transfer',
            demo: 'https://github.com/chahuja/mix-stage',
            technologies: ['ML', 'NLP', 'CV', 'Multi-Modal ML'],
            description: "Our work on No Gestures Left Behind: Learning Relationships between Spoken Language and Freeform Gestures, which was accepted to ECCV 2020",
            categories: ['featured', 'dataset']
        }

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    }
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">

            <div class="card radius shadowDepth1">

                ${project.image ?
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
                : ''}


                <div class="card__content card__padding">

                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>

                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>


                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
