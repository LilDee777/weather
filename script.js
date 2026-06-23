document.addEventListener('DOMContentLoaded', () => {

    // Select all interactive action buttons to apply hover translations safely
    const dynamicActionButtons = document.querySelectorAll('.micro-interactive-trigger, .donate-btn, .adopt-btn');

    dynamicActionButtons.forEach(actionButton => {
        actionButton.addEventListener('mouseenter', () => {
            actionButton.style.transform = 'translateY(-2px)';
        });

        actionButton.addEventListener('mouseleave', () => {
            actionButton.style.transform = 'translateY(0)';
        });
    });

    // Modal elements
    const donateModal = document.getElementById('donate-modal');
    const paymentMethod = document.getElementById('payment-method');
    const donateAmount = document.getElementById('donate-amount');
    const donateConfirm = document.getElementById('donate-confirm');
    const donateClose = document.getElementById('donate-close');
    const donateCancel = document.getElementById('donate-cancel');

    const adoptModal = document.getElementById('adopt-modal');
    const childPhoto = document.getElementById('child-photo');
    const childName = document.getElementById('child-name');
    const childInfo = document.getElementById('child-info');
    const childCounter = document.getElementById('child-counter');
    const adoptPrev = document.getElementById('adopt-prev');
    const adoptNext = document.getElementById('adopt-next');
    const adoptConfirm = document.getElementById('adopt-confirm');
    const adoptClose = document.getElementById('adopt-close');
    const adoptCancel = document.getElementById('adopt-cancel');

    // Comprehensive children list (100+ children)
    const children = [
        { name: 'Amina', age: 6, gender: 'Female' },
        { name: 'Kofi', age: 8, gender: 'Male' },
        { name: 'Lina', age: 5, gender: 'Female' },
        { name: 'Daniel', age: 9, gender: 'Male' },
        { name: 'Zainab', age: 7, gender: 'Female' },
        { name: 'Marcus', age: 10, gender: 'Male' },
        { name: 'Asha', age: 6, gender: 'Female' },
        { name: 'Jamal', age: 9, gender: 'Male' },
        { name: 'Sofia', age: 7, gender: 'Female' },
        { name: 'Kai', age: 8, gender: 'Male' },
        { name: 'Maya', age: 5, gender: 'Female' },
        { name: 'Noah', age: 10, gender: 'Male' },
        { name: 'Laila', age: 6, gender: 'Female' },
        { name: 'Tariq', age: 7, gender: 'Male' },
        { name: 'Priya', age: 8, gender: 'Female' },
        { name: 'Arjun', age: 9, gender: 'Male' },
        { name: 'Fatima', age: 5, gender: 'Female' },
        { name: 'Hassan', age: 6, gender: 'Male' },
        { name: 'Aisha', age: 7, gender: 'Female' },
        { name: 'Soren', age: 8, gender: 'Male' },
        { name: 'Elena', age: 6, gender: 'Female' },
        { name: 'Lucas', age: 9, gender: 'Male' },
        { name: 'Chioma', age: 7, gender: 'Female' },
        { name: 'Kwasi', age: 10, gender: 'Male' },
        { name: 'Nadia', age: 5, gender: 'Female' },
        { name: 'Rashid', age: 8, gender: 'Male' },
        { name: 'Leila', age: 6, gender: 'Female' },
        { name: 'Ahmed', age: 9, gender: 'Male' },
        { name: 'Safiya', age: 7, gender: 'Female' },
        { name: 'Daoud', age: 5, gender: 'Male' },
        { name: 'Amara', age: 8, gender: 'Female' },
        { name: 'Emeka', age: 9, gender: 'Male' },
        { name: 'Zara', age: 6, gender: 'Female' },
        { name: 'Liam', age: 7, gender: 'Male' },
        { name: 'Hana', age: 10, gender: 'Female' },
        { name: 'Oliver', age: 6, gender: 'Male' },
        { name: 'Yara', age: 5, gender: 'Female' },
        { name: 'Adil', age: 8, gender: 'Male' },
        { name: 'Noor', age: 7, gender: 'Female' },
        { name: 'Malik', age: 9, gender: 'Male' },
        { name: 'Leyla', age: 6, gender: 'Female' },
        { name: 'Samir', age: 8, gender: 'Male' },
        { name: 'Kaida', age: 7, gender: 'Female' },
        { name: 'Finn', age: 10, gender: 'Male' },
        { name: 'Zara', age: 5, gender: 'Female' },
        { name: 'Adnan', age: 9, gender: 'Male' },
        { name: 'Rania', age: 6, gender: 'Female' },
        { name: 'Jaiden', age: 8, gender: 'Male' },
        { name: 'Mira', age: 7, gender: 'Female' },
        { name: 'Karim', age: 9, gender: 'Male' },
        { name: 'Talia', age: 6, gender: 'Female' },
        { name: 'Sami', age: 8, gender: 'Male' },
        { name: 'Layla', age: 5, gender: 'Female' },
        { name: 'Nizar', age: 10, gender: 'Male' },
        { name: 'Yasmin', age: 7, gender: 'Female' },
        { name: 'Aziz', age: 9, gender: 'Male' },
        { name: 'Huda', age: 6, gender: 'Female' },
        { name: 'Rani', age: 8, gender: 'Female' },
        { name: 'Ravi', age: 7, gender: 'Male' },
        { name: 'Divya', age: 9, gender: 'Female' },
        { name: 'Aryan', age: 6, gender: 'Male' },
        { name: 'Aditi', age: 8, gender: 'Female' },
        { name: 'Vikram', age: 10, gender: 'Male' },
        { name: 'Anjali', age: 5, gender: 'Female' },
        { name: 'Rohan', age: 7, gender: 'Male' },
        { name: 'Meera', age: 9, gender: 'Female' },
        { name: 'Sameer', age: 6, gender: 'Male' },
        { name: 'Pooja', age: 8, gender: 'Female' },
        { name: 'Nikhil', age: 7, gender: 'Male' },
        { name: 'Sakshi', age: 10, gender: 'Female' },
        { name: 'Aditya', age: 6, gender: 'Male' },
        { name: 'Navya', age: 5, gender: 'Female' },
        { name: 'Karan', age: 9, gender: 'Male' },
        { name: 'Bhavna', age: 7, gender: 'Female' },
        { name: 'Sanjay', age: 8, gender: 'Male' },
        { name: 'Deepa', age: 6, gender: 'Female' },
        { name: 'Rahul', age: 10, gender: 'Male' },
        { name: 'Shweta', age: 5, gender: 'Female' },
        { name: 'Aman', age: 9, gender: 'Male' },
        { name: 'Kritika', age: 8, gender: 'Female' },
        { name: 'Arjun', age: 7, gender: 'Male' },
        { name: 'Tanvi', age: 6, gender: 'Female' },
        { name: 'Gaurav', age: 9, gender: 'Male' },
        { name: 'Richa', age: 5, gender: 'Female' },
        { name: 'Vivek', age: 10, gender: 'Male' },
        { name: 'Simran', age: 8, gender: 'Female' },
        { name: 'Harshit', age: 7, gender: 'Male' },
        { name: 'Neha', age: 6, gender: 'Female' },
        { name: 'Yash', age: 9, gender: 'Male' },
        { name: 'Ananya', age: 8, gender: 'Female' },
        { name: 'Arun', age: 10, gender: 'Male' },
        { name: 'Ritika', age: 5, gender: 'Female' },
        { name: 'Dev', age: 7, gender: 'Male' },
        { name: 'Shruti', age: 9, gender: 'Female' },
        { name: 'Abhishek', age: 6, gender: 'Male' },
        { name: 'Sonya', age: 8, gender: 'Female' },
        { name: 'Aryan', age: 9, gender: 'Male' },
        { name: 'Disha', age: 5, gender: 'Female' },
        { name: 'Vishal', age: 10, gender: 'Male' },
        { name: 'Avni', age: 7, gender: 'Female' },
        { name: 'Pranav', age: 8, gender: 'Male' },
        { name: 'Swati', age: 6, gender: 'Female' },
        { name: 'Nitin', age: 9, gender: 'Male' }
    ];

    let currentChildIndex = 0;

    function displayChild(index) {
        const child = children[index];
        childName.textContent = child.name;
        if (childPhoto) {
            // generate a simple placeholder avatar based on the child's name
            const imgUrl = `https://robohash.org/${encodeURIComponent(child.name)}.png?size=200x200`;
            childPhoto.src = imgUrl;
            childPhoto.alt = `${child.name} photo`;
        }
        childInfo.innerHTML = `<div class="font-body-md">Age: <span class="text-primary">${child.age}</span> years old</div><div class="font-body-md">Gender: <span class="text-primary">${child.gender}</span></div>`;
        childCounter.textContent = `${index + 1} / ${children.length}`;
    }

    // Open donate modal
    const donateButtons = document.querySelectorAll('.donate-btn');
    donateButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (donateModal) {
                donateAmount.value = '';
                paymentMethod.value = 'credit-card';
                donateModal.classList.remove('hidden');
            }
        });
    });

    // Close donate modal
    [donateClose, donateCancel].forEach(el => { if (el) el.addEventListener('click', () => donateModal.classList.add('hidden')) });

    if (donateConfirm) {
        donateConfirm.addEventListener('click', () => {
            const amount = parseFloat(donateAmount.value);
            const method = paymentMethod.value;
            if (!amount || amount <= 0) {
                alert('Please enter a valid amount.');
                return;
            }
            const methodLabel = method.replace('-', ' ').toUpperCase();
            alert(`Thank you for donating $${amount.toFixed(2)} via ${methodLabel}!`);
            donateModal.classList.add('hidden');
        });
    }

    // Adopt modal navigation
    const adoptButtons = document.querySelectorAll('.adopt-btn');
    adoptButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentChildIndex = 0;
            displayChild(currentChildIndex);
            adoptModal.classList.remove('hidden');
        });
    });

    if (adoptNext) {
        adoptNext.addEventListener('click', () => {
            currentChildIndex = (currentChildIndex + 1) % children.length;
            displayChild(currentChildIndex);
        });
    }

    if (adoptPrev) {
        adoptPrev.addEventListener('click', () => {
            currentChildIndex = (currentChildIndex - 1 + children.length) % children.length;
            displayChild(currentChildIndex);
        });
    }

    if (adoptConfirm) {
        adoptConfirm.addEventListener('click', () => {
            const child = children[currentChildIndex];
            alert(`You've successfully adopted ${child.name}! Welcome to the family.`);
            adoptModal.classList.add('hidden');
        });
    }

    [adoptClose, adoptCancel].forEach(el => { if (el) el.addEventListener('click', () => adoptModal.classList.add('hidden')) });

    // Close on backdrop click
    [donateModal, adoptModal].forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    // Sticky Navigation Scroll Monitor
    window.addEventListener('scroll', () => {
        const structuralHeader = document.querySelector('header');

        if (structuralHeader) {
            if (window.scrollY > 50) {
                structuralHeader.classList.add('shadow-2xl', 'bg-background');
                structuralHeader.classList.remove('bg-background/80');
            } else {
                structuralHeader.classList.remove('shadow-2xl', 'bg-background');
                structuralHeader.classList.add('bg-background/80');
            }
        }
    });

});