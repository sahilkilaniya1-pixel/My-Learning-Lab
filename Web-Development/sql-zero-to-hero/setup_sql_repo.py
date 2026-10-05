import os

# Define the folder structure and files
structure = {
    "01-database-fundamentals": [
        "01-rdbms-concepts.md",
        "02-primary-foreign-keys.sql"
    ],
    "02-ddl-data-definition": [
        "01-create-alter-drop.sql",
        "02-database-constraints.sql"
    ],
    "03-dml-data-manipulation": [
        "01-insert-update-delete.sql",
        "02-data-import-export.md"
    ],
    "04-dql-filtering-sorting": [
        "01-select-distinct-alias.sql",
        "02-where-operators.sql",
        "03-sorting-pagination.sql"
    ],
    "05-aggregate-grouping": [
        "01-aggregate-functions.sql",
        "02-group-by-having.sql"
    ],
    "06-joins-and-unions": [
        "01-inner-left-right-joins.sql",
        "02-full-cross-self-joins.sql",
        "03-set-operators.sql"
    ],
    "07-built-in-functions": [
        "01-string-functions.sql",
        "02-numeric-math-functions.sql",
        "03-datetime-functions.sql",
        "04-conditional-functions.sql"
    ],
    "08-subqueries-and-ctes": [
        "01-single-multi-row-subqueries.sql",
        "02-correlated-subqueries.sql",
        "03-common-table-expressions.sql"
    ],
    "09-advanced-sql": [
        "01-window-functions.sql",
        "02-views.sql",
        "03-indexing-optimization.sql",
        "04-transactions-tcl.sql"
    ],
    "10-programmable-sql": [
        "01-stored-procedures.sql",
        "02-user-defined-functions.sql",
        "03-triggers.sql"
    ],
    "projects-and-practice/01-ecommerce-database-schema": [
        "schema.sql",
        "mock-data.sql",
        "practice-queries.sql"
    ],
    "projects-and-practice/02-leetcode-hackerrank-solutions": [
        "easy-level-solutions.sql",
        "hard-level-solutions.sql"
    ]
}

# Root level files
root_files = ["README.md", "LICENSE", ".gitignore"]

def create_structure():
    # Root files creation
    for root_file in root_files:
        if not os.path.exists(root_file):
            with open(root_file, "w", encoding="utf-8") as f:
                if root_file == "README.md":
                    f.write("# 🚀 Complete SQL Roadmap: Basic to Advanced\n\nSQL learning repository from scratch.")
                elif root_file == ".gitignore":
                    f.write(".DS_Store\n*.log\n.vscode/\n")
                else:
                    f.write("")
            print(f"Created Root File: {root_file}")

    # Subfolders and files creation
    for folder, files in structure.items():
        os.makedirs(folder, exist_ok=True)
        print(f"Created Folder: {folder}")
        for file in files:
            file_path = os.path.join(folder, file)
            if not os.path.exists(file_path):
                with open(file_path, "w", encoding="utf-8") as f:
                    # Default comment header in sql files
                    if file.endswith(".sql"):
                        f.write(f"-- Topic: {file.replace('.sql', '').replace('-', ' ').title()}\n\n")
                    elif file.endswith(".md"):
                        f.write(f"# {file.replace('.md', '').replace('-', ' ').title()}\n\n")
                print(f"  └── Created File: {file_path}")

if __name__ == "__main__":
    create_structure()
    print("\n✅ Entire repository structure successfully created!")