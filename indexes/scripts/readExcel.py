import pandas as pd

def convert_excel_to_json(excel_file_path, columns=None, output_json_path=None):
    # Read only specific columns (if specified)
    df = pd.read_excel(excel_file_path, usecols=columns)

    # Convert DataFrame to list of dictionaries
    json_data = df.to_dict(orient='records')

    if output_json_path:
        with open(output_json_path, 'w', encoding='utf-8') as f:
            import json
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        print(f"Filtered data saved to {output_json_path}")
    else:
        print(json_data)

    return json_data


excel_path = ""
outhput_json_path = ""
columns = []
