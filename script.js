fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('bio-text').textContent = data.bio;
        document.getElementById('portrait-img').src = data.portrait;
    })
    .catch(error => console.error('Error loading data:', error));
