document.querySelector("#search-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const query = document.querySelector("#search-input").value;

  const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${encodeURIComponent(query)}`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4701cca41dmsh1e9d707573eec3bp18c3bcjsn4189c877789d',
      'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com',
    }
  };

  try {
    const response = await fetch(url, options);

    // 🔥 check if request failed
    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();
    console.log(result);

  } catch (error) {
    console.error("Error fetching search:", error.message);
  }
});
