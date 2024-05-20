import requests
import json

# URL of the ZenQuotes API
api_url = "https://zenquotes.io/api/quotes/"

def get_quotes(url):
    response = requests.get(url)
    data = response.json()
    return data

quotes = get_quotes(api_url)

# Save the quotes to a .js file
with open('quotes.js', 'w') as file:
    json.dump(quotes, file, indent=2)
