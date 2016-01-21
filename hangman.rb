require 'hangman_letter_check'

random = ["lol","crayon","crazy","freezing","cats","happy","red","phone","ten"]
# puts "What's the word to guess?"
# word = gets.chomp
puts "Guess the word..."
word = random.shuffle.first

num_tries = 7


letters = []

progress = "_" * word.length

begin 
  puts "Word progress so far: #{progress}"
  puts "#{num_tries} tries left."
  puts "Letters guessed so far: #{letters}"
  puts "Enter a letter:"
  guess = gets.chomp
  letters << guess

  if word.include?(guess)
    puts "Good guess!"
    indexes = word.occurrences(guess) 

    indexes.each do |index|
      progress[index] = guess
    end
  else
    puts "NO!"
  end

  # if guess.include?(sym_num)
  #   puts "That's not a letter."
  # end

  num_tries = num_tries - 1
  if num_tries == 0 
    puts "Oh NO! The game is over"
    puts "The word was #{word}"
  else
    puts "You won, the word is #{word}!"
  end

  end while num_tries > 0 and progress.include? '_'

