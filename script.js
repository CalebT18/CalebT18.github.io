
    const form = document.getElementById('Cast-Form');
    const input = document.getElementById('islander-input');
    const islanderList = document.getElementById('selected-islanders');

    const MAX_ISLANDERS = 10;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Check if the list is already full
        if (islanderList.children.length >= MAX_ISLANDERS) {
            alert('The villa is full! 💖 No more islanders can be added.');
            return;
        }

        const islanderName = input.value.trim();
        if (islanderName === '') return;

        // 🛑 Check if the name already exists in the list
        const existingIslanders = Array.from(islanderList.children).map(item => item.firstChild.textContent);
        if (existingIslanders.includes(islanderName)) {
            alert(`${islanderName} is already in the villa! 💖`);
            input.value = '';
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = islanderName;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', function () {
            listItem.remove();
        });

        listItem.appendChild(deleteBtn);
        islanderList.appendChild(listItem);

        input.value = '';
    });

