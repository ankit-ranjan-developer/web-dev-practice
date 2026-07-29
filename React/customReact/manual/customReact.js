// Get the location to inject the UI.

const Container = document.querySelector("#root");

// Create a custom React Component.

const reactComponet = {
    tag : 'a',
    attributes : {
        href : 'https://www.google.com',
        target: '_blank',
    },
    text : 'Google'
};

// call render function.

customRender(reactComponet, Container);

// The Custom Render Function.

function customRender(element, Container) {
    const Component = document.createElement(element.tag);
    Component.innerHTML = element.text;
    for (const key in element.attributes) {
        // if (!Object.hasOwn(object, key)) continue;
        Component.setAttribute(key, element.attributes[key]);
    }
    Container.appendChild(Component);
}




