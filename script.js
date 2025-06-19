document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-cor').onclick = function() {
        document.body.style.backgroundColor =
            document.body.style.backgroundColor === 'lightblue' ? 'brown' : 'lightblue';
    };
});