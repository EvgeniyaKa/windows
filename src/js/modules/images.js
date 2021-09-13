const images = () => {
    const imgWindow = document.createElement('div'),
          workSelector = document.querySelector('.works'),
          imgBig = document.createElement('img');

          imgWindow.classList.add('popup');
          workSelector.appendChild(imgWindow);

          imgWindow.style.justifyContent = 'center';
          imgWindow.style.alignItems = 'center';
          imgWindow.style.display = 'none';
      
      
          imgWindow.appendChild(imgBig);

    workSelector.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        console.log(target);

        if(target && target.classList.contains('preview')) {
            imgWindow.style.display = 'flex';
            const path =target.parentNode.getAttribute('href');
            imgBig.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')) {
            imgWindow.style.display = 'none';
        }
       

    })
};

export default images;