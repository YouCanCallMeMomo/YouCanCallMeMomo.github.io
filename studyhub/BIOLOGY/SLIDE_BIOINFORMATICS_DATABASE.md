# Slide 1

Course		 	: Computational Biology
Effective Period	: June 2022

Bioinformatics 
Database

---

# Learning Objectives

Database
Primary and Secondary Bioinformatics Database
Sequence Data Format
Sequence Data Retrieval

---

# What is a Database

A collection of information, usually stored in an electronic format that can be searched by a computer 
A collection of... 
Structured
searchable (index) -> table of contents
updated information (periodically) -> new edition
cross-referenced (hyperlinks) -> links with other database 
Includes associated tools (software) necessary for database access, updating, information insertion, information deletion and so on.

---

# Why need a Database ?

Explosive growth in biological data.
Data (sequences, 3D structures, 2D gel analysis, MS analysis….) are no longer published in a conventional manner, but directly submitted to databases
Essential tools for biological research, as classical publications used to be!
Simplify the information space by specialization.
Bonus: Allows you to make discoveries.

---

# Basic Database Structure



---

# Basic Database Structure



---

# Basic Database Structure



---

# Basic Database Structure



---

# Slide 9

Types of Biological Databases

Based on Information stored in the Databases 
Primary Databases 
Contain Data directly coming from experiments like :
Sequencing data
Microarray expression analysis
X-ray crystallography etc.

Secondary Databases
Contain Information DERIVED from primary or experimental data like:
Translated sequences of Protein

Specialized Databases 
Contain Information about one specific domain of Biology 
HIV
SNPs
HCV etc

---

# Examples of Databases

NCBI (National Center for Biotechnology Information)
www.ncbi.nlm.nih.gov
Created in 1988 as part of the National Library of Medicine at NIH
Establish public databases, that provides access to biomedical and genomic information.
Research in computational biology
Develop software tools for sequence analysis
GenBank is part of NCBI

2. Genbank (Under NCBI)
NIH genetic sequence database.
An annotated collection of all publicly available DNA sequences (Nucleic Acids Research, 2013 Jan;41(D1):D36-42).
Is part of the International Nucleotide Sequence Database Collaboration.

3. INSDC (International Nucleotide Sequence Database Collaboration)
Is a long-standing foundational initiative that operates between DDBJ, EMBL-EBIand NCBI.
Covers the spectrum of data raw reads, through alignments and assemblies to functional annotation, enriched with contextual information relating to samples and experimental configurations.

---

# Examples of Databases

4. NDB (Nucleic Acid Database)
A Portal for three-dimensional structural information about nucleic acids.
Contains information about experimentally-determined nucleic acids and complex assemblies.
Is used to perform searches based on annotations relating to sequence, structure and function.

5.EMBL (European Molecular Biology Laboratory)
An institute of 5 centres:
EMBL Heidelberg, Germany (Main laboratory)
EMBL Grenoble, France (Structural biology laboratory)
EMBL Monterotondo, Italy (Mouse biology laboratory)
EMBL Hamburg, Germany (Structural biology laboratory)
EMBL-EBI Hinxton, UK (EBI Laboratory)
Provides technology development and transfer, training and services to researchers.

---

# Database Summary

Databases are very important to store, and organize information. A good database are characterized by
Comprehensive, but easy to search.
Annotated, but not “too annotated”.
A simple, easy to understand structure
Cross-referenced.
Minimum redundancy.
Easy retrieval of data.

Most of Bioinformatics analysis begins from the retrieving information from database

You should be capable to use some basic biological databases like NCBI Nucleotide or protein databank.

---

# Sequence Data Format

There are many types of DNA sequences. The most common are: 

Regulatory regions, often before genes. 
Untranslated regions, often around genes (UTRs). 
Protein-coding regions (exons) 
Intergenic regions (between genes, introns). 

All these sequences can be found in GenBank of NCBI.
	(https://youtu.be/QIZ8QH6JcC8) 

	NCBI Primary databases (Archived info)
Original submissions by experimentalists
Content controlled by the submitter
Examples: GenBank , SNP, GEO, etc

	NCBI Derivative databases (Retrieved info)
Built from primary data
Content controlled by third party (NCBI)
Examples: Refseq , TPA, RefSNP , UniGene , 
       NCBI Protein, Structure, etc

---

# Sequence Data Format



---

# FASTA File for DNA Sequence Data

DNA sequence data are commonly stored in text files, sometimes also called flat files. These are files that can be opened in almost any text editor. The most common type of file is called a FASTA file, in which sequences are stored in FASTA format.

The name FASTA derives from a software package written in the mid-1980s that searches quickly through large collections of sequence data – the software is called FASTA, but is also called FAST-N (nucleotide) and FAST-P (protein).

For example, the hpcC gene from Escherichia coli, with accession number X81322.1, can be represented as follows:

You can access the database entry in the
https://www.ncbi.nlm.nih.gov/nuccore/587109?report=fasta

---

# FASTA File for DNA Sequence Data

It is important to note that FASTA sequences are not restricted to DNA sequences, they can also be used to represent protein sequences, in which each letter represents a single amino acid. Here is an example of a FASTA file for a protein sequence.







In the example above, the protein FASTA sequence of an Escherichia coli dehydrogenase is shown. This protein has accession number “CAA57102.1” as shown in the header of the FASTA entry.

The FASTA format must, at a minimum, have a header (always preceded by a “>”) in the first line of the file, and the sequence starting in the second line. The header includes some minimal information about the sequence.

---

# GenBank File Format (FASTA or Flat file)

Title

Header

Sequence

Feature 
Table

Records are grouped for various reasons: 

understand this is key (identifier) to using and fully taking advantage of this database.

You need identifiers which are stable through time
Need identifiers which will always refer to specific sequences
Need these identifiers to track history of sequence updates
Also need feature and annotation identifier

---

# GenBank File Format (FASTA or Flat file)



---

# Sequence Data Retrieval

Watch this tutorials to Learn How to USE NCBI Nucleotide in Indonesian https://youtu.be/RPyhYraPcog

---

# References

Lisa A. Urry, Micheal L. Cain, Steven A. Wasserman, Peter V. Min. 2022. Campbell Biology 12th Edition. Pearson