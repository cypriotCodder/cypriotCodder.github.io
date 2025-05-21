import pyqrcode
from pyqrcode import QRCode

def generate_qr_code(url, filename):
    """
    Generates a QR code for the given URL and saves it as a PNG file.

    :param url: The URL to encode in the QR code.
    :param filename: The name of the file to save the QR code image.
    """
    # Generate QR code
    qr = pyqrcode.create(url)


    # Save as PNG file
    qr.png(filename, scale=8)

    print(f"QR code saved as {filename}")

generate_qr_code("file:///C:/Users/PC/Desktop/gymWebsite/indexes/training.html#backGifs", "sirt.png")