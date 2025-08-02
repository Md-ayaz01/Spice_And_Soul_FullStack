# utils/together_api.py
import os
import requests
from dotenv import load_dotenv

load_dotenv()

TOGETHER_API_KEY = os.getenv("TOGETHER_API_KEY")
TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions"

def get_together_response(messages, model="mistralai/Mixtral-8x7B-Instruct-v0.1", temp=0.7, max_tokens=200):
    headers = {
        "Authorization": f"Bearer {TOGETHER_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": model,
        "messages": messages,
        "temperature": temp,
        "max_tokens": max_tokens
    }

    response = requests.post(TOGETHER_API_URL, headers=headers, json=payload)
    return response.json()
