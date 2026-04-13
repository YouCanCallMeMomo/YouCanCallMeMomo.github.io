import urllib.request
import urllib.error

# We will try a few good URLs
urls = [
    "https://www.genome.gov/sites/default/files/tg/en/illustration/genetic_code.jpg",
    "https://ib.bioninja.com.au/_Media/codon-table_med.jpeg",
    "https://bio.libretexts.org/@api/deki/files/4243/GeneticCode.png"
]

output_path = "c:\\SEMESTER4\\BIOLOGY\\codon_table.png"
success = False

for url in urls:
    try:
        print(f"Trying to download from {url}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response, open(output_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success! Image downloaded from {url}")
        success = True
        break
    except Exception as e:
        print(f"Failed: {e}")

if not success:
    print("Could not download any image.")
