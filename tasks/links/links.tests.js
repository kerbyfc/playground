({
    "buttons[7].onclick === null": function (resolve) {
        const links = document.querySelectorAll('button');
        const sliced = typeof links[1].onclick === 'function' && links[7].onclick === null;
        resolve([sliced, true]);
    },

    "buttons[0].onclick === null": function (resolve) {
        const links = document.querySelectorAll('button');
        const sliced = typeof links[1].onclick === 'function' && links[0].onclick === null;
        resolve([sliced, true]);
    },

    "buttons[1].click() // prints 1": function(resolve) {
        const links = document.querySelectorAll('button');
        window.printIndex = function(i) {
            console.log(i);
            resolve([1, i]);
        }

        links[1].click();
    },

    "buttons[3].click() // prints 3": function(resolve) {
        const links = document.querySelectorAll('button');
        window.printIndex = function(i) {
            console.log(i);
            resolve([3, i]);
        }

        links[3].click();
    }
})
