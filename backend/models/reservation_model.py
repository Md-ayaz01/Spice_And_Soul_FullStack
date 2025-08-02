# models/booking_model.py
import pandas as pd
import os

BOOKING_FILE = os.path.join("data", "bookings.csv")

def save_booking(data):
    df = pd.DataFrame([data])
    df.to_csv(BOOKING_FILE, mode='a', header=not os.path.exists(BOOKING_FILE), index=False)

def get_bookings():
    if not os.path.exists(BOOKING_FILE):
        return []
    return pd.read_csv(BOOKING_FILE).to_dict(orient="records")
