async function loadposts() {
    const response = await fetch('C:/Users/Brand/Documents/COMP2707/finalproject/userdata/users.json');
    const data = await response.text();
    console.log(data);
}

function readJSON() {
    const path = 'C:/Users/Brand/Documents/COMP2707/finalproject/userdata/users.json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function() {
                //do stuff with fileReader.result
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}

class JSONReader {
    constructor(completed = null) {
        this.onCompleted = completed;
        this.result = undefined;
        this.input = document.createElement('input');
        this.input.type = 'file';
        this.input.accept = 'text/json|application/json';
        this.input.addEventListener('change', this.onChange.bind(this), false);
        this.input.style.display = 'none';
        document.body.appendChild(this.input);
        this.input.click();
    }

    destroy() {
        this.input.removeEventListener('change', this.onChange.bind(this), false);
        document.body.removeChild(this.input);
    }

    onChange(event) {
        if (event.target.files.length > 0) {
            this.readJSON(event.target.files[0]);
        }
    }

    readJSON(file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target.readyState === 2) {
                this.result = JSON.parse(reader.result);
                if (typeof this.onCompleted === 'function') {
                    this.onCompleted(this.result);
                }
                this.destroy();
            }
        };
        reader.readAsText('C:/Users/Brand/Documents/COMP2707/finalproject/userdata/users.json');
    }

    static read(callback = null) {
        return new JSONReader(callback);
    }
}
