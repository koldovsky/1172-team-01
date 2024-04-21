Write a function to split a string and convert it into an array of words
Ігор Беспалов  
def string_to_array(s):
   return s.split(" ")

def DNAtoRNA(dna):
  result = "";
  dna = list(dna.upper());
  for nucleotide in dna:
    if nucleotide == "A":
      result += "A";
    if nucleotide == "T":
      result += "U";
    if nucleotide == "C":
      result += "C";
    if nucleotide == "G":
      result += "G";
  return result;

def DNAtoRNA(dna):
  result = "";
  dna = list(dna.upper());
  for nucleotide in dna:
    if nucleotide == "T":
      result += "U";
    else:
      result += nucleotide;
  return result;
