const img = document.getElementById('myImage');
        const sizeInfo = document.getElementById('sizeInfo');
        let width = img.width;
        let height = img.height;
        let topPos = 50; // percentage
        let leftPos = 50;

        function resizeImage(action) {
            const step = 100; // pixels per change

            if (action === 'increaseWidth') width += step;
            else if (action === 'decreaseWidth' && width > step) width -= step;
            else if (action === 'increaseHeight') height += step;
            else if (action === 'decreaseHeight' && height > step) height -= step;

            img.width = width;
            img.height = height;
            sizeInfo.textContent = `Width: ${width}px | Height: ${height}px`;
        }

        function moveImage(direction) {
            const step = 20; // percentage per move

            if (direction === 'up') topPos -= step;
            else if (direction === 'down') topPos += step;
            else if (direction === 'left') leftPos -= step;
            else if (direction === 'right') leftPos += step;

            img.style.top = topPos + '%';
            img.style.left = leftPos + '%';
            img.style.transform = 'translate(-50%, -50%)';
        }