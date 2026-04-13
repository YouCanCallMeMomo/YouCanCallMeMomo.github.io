import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(10, 8))
ax.axis('off')

table_data = [
    ["U", "UUU Phe (F)\nUUC Phe (F)\nUUA Leu (L)\nUUG Leu (L)", "UCU Ser (S)\nUCC Ser (S)\nUCA Ser (S)\nUCG Ser (S)", "UAU Tyr (Y)\nUAC Tyr (Y)\nUAA BERHENTI\nUAG BERHENTI", "UGU Cys (C)\nUGC Cys (C)\nUGA BERHENTI\nUGG Trp (W)"],
    ["C", "CUU Leu (L)\nCUC Leu (L)\nCUA Leu (L)\nCUG Leu (L)", "CCU Pro (P)\nCCC Pro (P)\nCCA Pro (P)\nCCG Pro (P)", "CAU His (H)\nCAC His (H)\nCAA Gln (Q)\nCAG Gln (Q)", "CGU Arg (R)\nCGC Arg (R)\nCGA Arg (R)\nCGG Arg (R)"],
    ["A", "AUU Ile (I)\nAUC Ile (I)\nAUA Ile (I)\nAUG Met (M) MULAI", "ACU Thr (T)\nACC Thr (T)\nACA Thr (T)\nACG Thr (T)", "AAU Asn (N)\nAAC Asn (N)\nAAA Lys (K)\nAAG Lys (K)", "AGU Ser (S)\nAGC Ser (S)\nAGA Arg (R)\nAGG Arg (R)"],
    ["G", "GUU Val (V)\nGUC Val (V)\nGUA Val (V)\nGUG Val (V)", "GCU Ala (A)\nGCC Ala (A)\nGCA Ala (A)\nGCG Ala (A)", "GAU Asp (D)\nGAC Asp (D)\nGAA Glu (E)\nGAG Glu (E)", "GGU Gly (G)\nGGC Gly (G)\nGGA Gly (G)\nGGG Gly (G)"]
]

col_labels = ["Basa 1 \\ Basa 2", "U", "C", "A", "G"]
table = ax.table(cellText=table_data, colLabels=col_labels, loc='center', cellLoc='center')
table.scale(1, 4)
table.set_fontsize(12)

plt.title("Tabel Kodon Asam Amino (Kodon mRNA)", fontsize=16, pad=20)
plt.tight_layout()
plt.savefig("c:\\SEMESTER4\\BIOLOGY\\codon_table.png", bbox_inches='tight', dpi=150)
print("Codon table image generated successfully.")
