import urllib.request

url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/GeneticCode21-161113.png/800px-GeneticCode21-161113.png"
output_path = "c:\\SEMESTER4\\BIOLOGY\\codon_table.png"

try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response, open(output_path, 'wb') as out_file:
        out_file.write(response.read())
    print(f"Successfully downloaded codon table to {output_path}")
except Exception as e:
    print(f"Failed to download image: {e}")
