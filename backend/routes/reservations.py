from flask import Blueprint, request, jsonify
import csv
import os

reservation = Blueprint("reservation", __name__)
DATA_FILE = "data/reservations.csv"

# Ensure CSV exists
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["name", "email", "phone", "date", "time", "guests", "message"])

@reservation.route("/reservation", methods=["POST"])
def make_reservation():
    data = request.get_json()
    try:
        with open(DATA_FILE, mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([
                data["name"], data["email"], data["phone"],
                data["date"], data["time"], data["guests"],
                data.get("message", "")
            ])
        return jsonify({"message": "Reservation saved successfully!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
