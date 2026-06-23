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
    const childName = document.getElementById('child-name');
    const childInfo = document.getElementById('child-info');
    const childCounter = document.getElementById('child-counter');
    const adoptPrev = document.getElementById('adopt-prev');
    const adoptNext = document.getElementById('adopt-next');
    const adoptConfirm = document.getElementById('adopt-confirm');
    const adoptClose = document.getElementById('adopt-close');
    const adoptCancel = document.getElementById('adopt-cancel');

    // Comprehensive children list
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
        { name: 'Noah', age: 10, gender: 'Male' }
    ];

    let currentChildIndex = 0;

    function displayChild(index) {
        const child = children[index];
        childName.textContent = child.name;
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