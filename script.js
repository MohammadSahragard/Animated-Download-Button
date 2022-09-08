const $ = document;
const query = queryItem => $.querySelector (queryItem);

// ------- data
const button = query ('.button');
const progress = query ('.progress');
const value = query ('.value');
let percent = 0;

// ------- function's
const startDownload = () => {
    const intervalItem = setInterval (() => {
        button.removeEventListener ('click', startDownload);
        percent++;

        button.classList.add ('start-download');
        progress.style.inset = `${percent}% 0 0 0`;
        value.innerHTML = `${percent}%`;

        if (percent === 100) {
            clearInterval(intervalItem);
            percent = 0;
            button.classList.remove('start-download');
            progress.style.inset = '-20px 0 0 0';
            value.innerHTML = 'Download';
            button.addEventListener('click', startDownload);
        }
    }, 30);
}

// ------ event's
button.addEventListener('click', startDownload);