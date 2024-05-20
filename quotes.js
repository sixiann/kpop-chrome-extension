const quotes = [
  {
    "q": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.",
    "a": "Eleanor Roosevelt",
    "c": "112",
    "h": "<blockquote>&ldquo;You gain strength, courage and confidence by every experience in which you really stop to look fear in the face.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
  },
  {
    "q": "Life is a long lesson in humility. ",
    "a": "James Matthew Barrie",
    "c": "35",
    "h": "<blockquote>&ldquo;Life is a long lesson in humility. &rdquo; &mdash; <footer>James Matthew Barrie</footer></blockquote>"
  },
  {
    "q": "Life reflects your own thoughts back to you.",
    "a": "Napoleon Hill",
    "c": "44",
    "h": "<blockquote>&ldquo;Life reflects your own thoughts back to you.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
  },
  {
    "q": "Best be yourself, imperial, plain, and true.",
    "a": "Robert Browning",
    "c": "44",
    "h": "<blockquote>&ldquo;Best be yourself, imperial, plain, and true.&rdquo; &mdash; <footer>Robert Browning</footer></blockquote>"
  },
  {
    "q": "Expect the best, plan for the worst, and prepare to be surprised. ",
    "a": "Denis Waitley",
    "c": "66",
    "h": "<blockquote>&ldquo;Expect the best, plan for the worst, and prepare to be surprised. &rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>"
  },
  {
    "q": "Our attitude toward life determines life's attitude towards us.",
    "a": "Earl Nightingale",
    "c": "63",
    "h": "<blockquote>&ldquo;Our attitude toward life determines life's attitude towards us.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
  },
  {
    "q": "Winners don't Quit. That's why they Win.",
    "a": "Unknown",
    "c": "40",
    "h": "<blockquote>&ldquo;Winners don't Quit. That's why they Win.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "If you want to achieve greatness stop asking for permission.",
    "a": "Unknown",
    "c": "60",
    "h": "<blockquote>&ldquo;If you want to achieve greatness stop asking for permission.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
  },
  {
    "q": "Failure is simply the opportunity to begin again, this time more intelligently.",
    "a": "Henry Ford",
    "c": "79",
    "h": "<blockquote>&ldquo;Failure is simply the opportunity to begin again, this time more intelligently.&rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
  },
  {
    "q": "We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.",
    "a": "Vaclav Havel",
    "c": "115",
    "h": "<blockquote>&ldquo;We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.&rdquo; &mdash; <footer>Vaclav Havel</footer></blockquote>"
  },
  {
    "q": "I didn't get there by wishing for it or hoping for it, but by working for it.",
    "a": "Estee Lauder",
    "c": "77",
    "h": "<blockquote>&ldquo;I didn't get there by wishing for it or hoping for it, but by working for it.&rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>"
  },
  {
    "q": "It's the possibility of having a dream come true that makes life interesting.",
    "a": "Paulo Coelho",
    "c": "77",
    "h": "<blockquote>&ldquo;It's the possibility of having a dream come true that makes life interesting.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
  },
  {
    "q": "Because of your smile, you make life more beautiful.",
    "a": "Thich Nhat Hanh",
    "c": "52",
    "h": "<blockquote>&ldquo;Because of your smile, you make life more beautiful.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
  },
  {
    "q": "Question everything. Learn something. Answer nothing.",
    "a": "Euripides",
    "c": "53",
    "h": "<blockquote>&ldquo;Question everything. Learn something. Answer nothing.&rdquo; &mdash; <footer>Euripides</footer></blockquote>"
  },
  {
    "q": "The big secret in life is that there is no big secret. Whatever your goal, you can get there if you're willing to work.",
    "a": "Oprah Winfrey",
    "c": "119",
    "h": "<blockquote>&ldquo;The big secret in life is that there is no big secret. Whatever your goal, you can get there if you're willing to work.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
  },
  {
    "q": "The sun shines upon good and bad alike.",
    "a": "Hans Christian Andersen",
    "c": "39",
    "h": "<blockquote>&ldquo;The sun shines upon good and bad alike.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>"
  },
  {
    "q": "Enlightenment is intimacy with all things.",
    "a": "Dogen",
    "c": "42",
    "h": "<blockquote>&ldquo;Enlightenment is intimacy with all things.&rdquo; &mdash; <footer>Dogen</footer></blockquote>"
  },
  {
    "q": "People are doing the best that they can from their own level of consciousness.",
    "a": "Deepak Chopra",
    "c": "78",
    "h": "<blockquote>&ldquo;People are doing the best that they can from their own level of consciousness.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
  },
  {
    "q": "You will face many defeats in life, but never let yourself be defeated.",
    "a": "Maya Angelou",
    "c": "71",
    "h": "<blockquote>&ldquo;You will face many defeats in life, but never let yourself be defeated.&rdquo; &mdash; <footer>Maya Angelou</footer></blockquote>"
  },
  {
    "q": "Confidence is not a guarantee of success, but a pattern of thinking that will improve your likelihood of success, a tenacious search for ways to make things work.",
    "a": "John Eliot",
    "c": "162",
    "h": "<blockquote>&ldquo;Confidence is not a guarantee of success, but a pattern of thinking that will improve your likelihood of success, a tenacious search for ways to make things work.&rdquo; &mdash; <footer>John Eliot</footer></blockquote>"
  },
  {
    "q": "The only difference between success and failure is the ability to take action.",
    "a": "Alexander Graham Bell",
    "c": "78",
    "h": "<blockquote>&ldquo;The only difference between success and failure is the ability to take action.&rdquo; &mdash; <footer>Alexander Graham Bell</footer></blockquote>"
  },
  {
    "q": "I find the best way to love someone is not to change them, but instead, help them reveal the greatest version of themselves.",
    "a": "Steve Maraboli",
    "c": "124",
    "h": "<blockquote>&ldquo;I find the best way to love someone is not to change them, but instead, help them reveal the greatest version of themselves.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
  },
  {
    "q": "One small positive thought can change your whole day.",
    "a": "Zig Ziglar",
    "c": "53",
    "h": "<blockquote>&ldquo;One small positive thought can change your whole day.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
  },
  {
    "q": "Failure is an option here. If things are not failing, you are not innovating enough.",
    "a": "Elon Musk",
    "c": "84",
    "h": "<blockquote>&ldquo;Failure is an option here. If things are not failing, you are not innovating enough.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "Invisible things are the only realities.",
    "a": "Edgar Allan Poe",
    "c": "40",
    "h": "<blockquote>&ldquo;Invisible things are the only realities.&rdquo; &mdash; <footer>Edgar Allan Poe</footer></blockquote>"
  },
  {
    "q": "There's no coming to consciousness without pain",
    "a": "Carl Jung",
    "c": "47",
    "h": "<blockquote>&ldquo;There's no coming to consciousness without pain&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
  },
  {
    "q": "No one returns from a long journey the same person they were before.",
    "a": "Zen Proverb",
    "c": "68",
    "h": "<blockquote>&ldquo;No one returns from a long journey the same person they were before.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
  },
  {
    "q": "Success is not the result of making money; making money is the result of success - and success is in direct proportion to our service.",
    "a": "Earl Nightingale",
    "c": "134",
    "h": "<blockquote>&ldquo;Success is not the result of making money; making money is the result of success - and success is in direct proportion to our service.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
  },
  {
    "q": "The biggest mistake we could ever make in our lives is to think we work for anybody but ourselves.",
    "a": "Brian Tracy",
    "c": "98",
    "h": "<blockquote>&ldquo;The biggest mistake we could ever make in our lives is to think we work for anybody but ourselves.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
  },
  {
    "q": "I have never let my schooling interfere with my education.",
    "a": "Mark Twain",
    "c": "58",
    "h": "<blockquote>&ldquo;I have never let my schooling interfere with my education.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
  },
  {
    "q": "Focus on how far you have come in life rather than looking at the accomplishments of others.",
    "a": "Lolly Daskal",
    "c": "92",
    "h": "<blockquote>&ldquo;Focus on how far you have come in life rather than looking at the accomplishments of others.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
  },
  {
    "q": "A heart is not judged by how much you love, but by how much you are loved by others.",
    "a": "Judy Garland",
    "c": "84",
    "h": "<blockquote>&ldquo;A heart is not judged by how much you love, but by how much you are loved by others.&rdquo; &mdash; <footer>Judy Garland</footer></blockquote>"
  },
  {
    "q": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
    "a": "Steve Maraboli",
    "c": "149",
    "h": "<blockquote>&ldquo;Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.&rdquo; &mdash; <footer>Steve Maraboli</footer></blockquote>"
  },
  {
    "q": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    "a": "Lao Tzu",
    "c": "129",
    "h": "<blockquote>&ldquo;A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
  },
  {
    "q": "Today will never happen again. Don't waste it with a false start or no start at all.",
    "a": "Og Mandino",
    "c": "84",
    "h": "<blockquote>&ldquo;Today will never happen again. Don't waste it with a false start or no start at all.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
  },
  {
    "q": "There is little success where there is little laughter.",
    "a": "Andrew Carnegie",
    "c": "55",
    "h": "<blockquote>&ldquo;There is little success where there is little laughter.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>"
  },
  {
    "q": "Life can be the scariest and most beautiful thing simultaneously.",
    "a": "Maxime Lagace",
    "c": "65",
    "h": "<blockquote>&ldquo;Life can be the scariest and most beautiful thing simultaneously.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
  },
  {
    "q": "A dream doesn't become reality through magic it takes sweat, determination and hard work.",
    "a": "Colin Powell",
    "c": "89",
    "h": "<blockquote>&ldquo;A dream doesn't become reality through magic it takes sweat, determination and hard work.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"
  },
  {
    "q": "Change your thoughts and you change your world.",
    "a": "Norman Vincent Peale",
    "c": "47",
    "h": "<blockquote>&ldquo;Change your thoughts and you change your world.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
  },
  {
    "q": "It doesn't matter where you are, you are nowhere compared to where you can go.",
    "a": "Bob Proctor",
    "c": "78",
    "h": "<blockquote>&ldquo;It doesn't matter where you are, you are nowhere compared to where you can go.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>"
  },
  {
    "q": "The attempt to escape from pain, is what creates more pain.",
    "a": "Gabor Mate",
    "c": "59",
    "h": "<blockquote>&ldquo;The attempt to escape from pain, is what creates more pain.&rdquo; &mdash; <footer>Gabor Mate</footer></blockquote>"
  },
  {
    "q": "Life needs to be more than just solving problems every day. You need to wake up and be excited about the future.",
    "a": "Elon Musk",
    "c": "112",
    "h": "<blockquote>&ldquo;Life needs to be more than just solving problems every day. You need to wake up and be excited about the future.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"
  },
  {
    "q": "Throughout this life, you can never be certain of living long enough to take another breath.",
    "a": "Huang Po",
    "c": "92",
    "h": "<blockquote>&ldquo;Throughout this life, you can never be certain of living long enough to take another breath.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
  },
  {
    "q": "Even the smallest person can change the course of the future.",
    "a": "J.R.R. Tolkien",
    "c": "61",
    "h": "<blockquote>&ldquo;Even the smallest person can change the course of the future.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
  },
  {
    "q": "In order for you to be the BEST you can be for others, first you must be BEST for yourself.",
    "a": "Jeffrey Gitomer",
    "c": "91",
    "h": "<blockquote>&ldquo;In order for you to be the BEST you can be for others, first you must be BEST for yourself.&rdquo; &mdash; <footer>Jeffrey Gitomer</footer></blockquote>"
  },
  {
    "q": "Many answers to what you seek don't lie 'out there'. If you look inwards, you'll find the answer has been in you all along.",
    "a": "Celestine Chua",
    "c": "123",
    "h": "<blockquote>&ldquo;Many answers to what you seek don't lie 'out there'. If you look inwards, you'll find the answer has been in you all along.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
  },
  {
    "q": "Only to the extent that we expose ourselves over and over to annihilation can that which is indestructible in us be found.",
    "a": "Pema Chodron",
    "c": "122",
    "h": "<blockquote>&ldquo;Only to the extent that we expose ourselves over and over to annihilation can that which is indestructible in us be found.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
  },
  {
    "q": "The most important thing in life is to stop saying 'I wish' and start saying 'I will'. Consider nothing impossible, then treat possibilities as probabilities.",
    "a": "Charles Dickens",
    "c": "158",
    "h": "<blockquote>&ldquo;The most important thing in life is to stop saying 'I wish' and start saying 'I will'. Consider nothing impossible, then treat possibilities as probabilities.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "Give out what you most want to come back.",
    "a": "Robin Sharma",
    "c": "41",
    "h": "<blockquote>&ldquo;Give out what you most want to come back.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
  },
  {
    "q": "It is not what we get. But who we become, what we contribute... that gives meaning to our lives.",
    "a": "Tony Robbins",
    "c": "96",
    "h": "<blockquote>&ldquo;It is not what we get. But who we become, what we contribute... that gives meaning to our lives.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
  }
]