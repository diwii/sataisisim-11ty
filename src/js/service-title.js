function collapseExpand() {
    let serviceTitles;

    serviceTitles = document.getElementsByClassName('service-title');

    for (let title of serviceTitles) {
        title.addEventListener('click', handleServiceTitleClick);
    }

    function handleServiceTitleClick(event) {
        try {
            let title = event.target;
            let parent = title.parentNode;

            if (parent.classList.contains('collapsed')) {
                parent.classList.remove('collapsed');
            } else {
                parent.classList.add('collapsed');
            }
        } catch (error) {
            console.error(error);
            handleAnyErrorCollapsed();
        }
    }
};

function handleAnyErrorCollapsed() {
    const collapsedItems = document.querySelectorAll('.collapsed');

    for (let item of collapsedItems) {
        console.log(item);
        item.classList.remove('collapsed');
    }
}

collapseExpand();
