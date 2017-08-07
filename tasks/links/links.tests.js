({
    "links[6].onclick === null": function (resolve) {
        const links = document.querySelectorAll('button');
        const sliced = typeof links[2].onclick === 'function' && links[6].onclick === null;
        resolve([sliced, true]);
    },

    "links[1].onclick === null": function (resolve) {
        const links = document.querySelectorAll('button');
        const sliced = typeof links[0].onclick === 'function' && links[1].onclick === null;
        resolve([sliced, true]);
    },

    "links[2].click() // prints 2": function(resolve) {
        const links = document.querySelectorAll('button');
        window.printIndex = function(i) {
            console.log(i);
            resolve([2, i]);
        }

        links[2].click();
    },

    "links[4].click() // prints 4": function(resolve) {
        const links = document.querySelectorAll('button');
        window.printIndex = function(i) {
            console.log(i);
            resolve([4, i]);
        }

        links[4].click();
    }
})
