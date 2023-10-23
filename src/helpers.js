export async function getQuote() {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e15f3519famsh57c9a294cbac6aep1f4734jsneea0f0d86653',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options);
    const { content, originator: { name } } = await response.json()
    return { content, name }
  } catch (error) {
    console.error(error)
  }
}

export async function tweetAnchor({ quote, author }) {
  const tweet = `"${quote}" - ${author}`
  document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet/?text=${tweet}`
}

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

export async function setColor() {
  const color = getRandomColor();
  const bgElements = document.getElementsByClassName('color-bg')
  const fontElements = document.getElementsByClassName('color-text')

  for (const elem of bgElements) {
    elem.style.background = color
  }

  for (const elem of fontElements) {
    elem.style.color = color
  }
}