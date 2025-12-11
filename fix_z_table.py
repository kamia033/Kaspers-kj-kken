
import csv
import os

file_path = r"c:\Users\kamia033\OneDrive - Osloskolen\Dokumenter på ekte\Proggeprosjekter\Kaspers kjøkken\kasperskjøkken\src\content\Matematikk S2\4 - Sannsynlighet og statistikk\05.1 - Z-tabell.md"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Extract CSV part (skip first 2 lines which are title and empty line)
csv_lines = [line.strip() for line in lines if ',' in line]

# Parse CSV
reader = csv.reader(csv_lines)
data = list(reader)

# Create Markdown table
md_table = []
header = data[0]
md_table.append("| " + " | ".join(header) + " |")
md_table.append("|" + "|".join(["---"] * len(header)) + "|")

for row in data[1:]:
    md_table.append("| " + " | ".join(row) + " |")

table_str = "\n".join(md_table)

# Examples content
examples = """

## Eksempler på bruk av Z-tabellen

### Eksempel 1: Positiv Z-verdi
Finn $P(Z < 1,24)$.

1. Finn raden for **1,2**.
2. Finn kolonnen for **0,04**.
3. Tallet der de møtes er **0,8925**.

Altså er $P(Z < 1,24) = 0,8925$.

### Eksempel 2: Negativ Z-verdi
Finn $P(Z < -0,52)$.

Tabellen viser kun positive verdier for $Z$. Vi bruker derfor symmetrien i normalfordelingen:
$$P(Z < -a) = 1 - P(Z < a)$$

1. Finn $P(Z < 0,52)$ i tabellen.
   - Rad **0,5**, kolonne **0,02** gir **0,6985**.
2. Regn ut:
   $$P(Z < -0,52) = 1 - 0,6985 = 0,3015$$

Altså er $P(Z < -0,52) = 0,3015$.
"""

# Write back to file
new_content = "# Z-tabell\n\n" + table_str + examples

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("File updated successfully.")
