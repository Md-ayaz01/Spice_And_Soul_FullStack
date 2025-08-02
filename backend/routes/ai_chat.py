from flask import Blueprint, request, jsonify
from utils.together_api import get_together_response

ai_chat = Blueprint("ai_chat", __name__)

@ai_chat.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("prompt")  # ✅ Accepting 'prompt' from frontend

    # ✅ Custom system prompt for Spice & Soul chatbot
    system_prompt = (
        "You are the official AI assistant for Spice & Soul — a modern AI-powered restaurant that blends culinary tradition with innovation. "
        "Your job is to guide customers through their dining experience with warmth and clarity. Help users with the following:\n\n"
        "- 🍽️ Menu: Describe dishes, suggest food based on preferences (e.g. vegetarian, spicy, creamy), explain ingredients or pricing.\n"
        "- 📅 Reservations: If users want to reserve a table, politely ask for their name, email, date, time, number of guests, and special requests.\n"
        "- 🖼️ Gallery: Invite users to explore the atmosphere and visuals of the restaurant.\n"
        "- 🧠 About: Explain how Spice & Soul uses AI to personalize dining and blend tradition with innovation.\n"
        "- 📖 Blog: Summarize or recommend blog articles like 'The Art of Indian Spices' or 'From Farm to Fork'.\n"
        "- 💬 Contact: Help with feedback, questions, or how to get in touch.\n\n"
        "Always stay friendly, helpful, conversational, and avoid long robotic responses. Be concise, polite, and reflect the elegant yet welcoming tone of the restaurant."
    )

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_input}
    ]

    try:
        result = get_together_response(messages)
        reply = result['choices'][0]['message']['content']
        return jsonify({"response": reply})
    except Exception as e:
        return jsonify({"error": str(e)})
