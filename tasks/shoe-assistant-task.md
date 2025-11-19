# Task: Shoe Selection Assistant

## Context for the Agent

The user formulates a request in natural language, for example:

> I want autumn shoes for Helsinki, so that my feet do not sweat indoors and do not freeze outdoors.

The agent should:

1. Send the request to OpenAI (or another LLM).
2. Receive structured parameters:
   - Season: autumn
   - City: Helsinki
   - Temperature: from -5 to +10°C
   - Requirements: waterproof, non-slip sole, thermoregulation
   - Gender: male, female, or unisex
   - Age group: adult or child

3. Use these parameters to search for suitable shoes and filter out irrelevant options (e.g., do not show children's shoes to adults, or men's shoes to women).

4. Present the user with a list of popular brands for initial selection. The user can choose any brands they prefer, or skip this step for a broader search. The brand list will be expanded and updated over time based on user feedback and market trends.

## Context for the Human

- Describe your needs in simple language.
- Example request: "I need winter boots for walking in the snow in Lapland."
- The agent will analyze your request and select shoes based on the parameters.

---

### Goal

Make shoe selection simple and personalized, using AI to analyze user needs.
