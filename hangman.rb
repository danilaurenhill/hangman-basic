puts "What's the word to guess?"
word_to_guess = gets.chomp

num_tries = 5

letters_guessed = []

word_progress = "_" * word_to_guess.length

begin 
  puts "Word progress so far: #{word_progress}"
  puts "#{num_tries} tries left."
  puts "Letters guessed so far: #{letters_guessed}"
  puts "Enter a letter:"
  letter = gets.chomp
  letters_guessed << letter
end

if word_to_guess.include?(letter)
    puts "Good guess!"
else
    puts "Bummer!"
end

