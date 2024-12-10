# HA Light Card

A custom light card for Home Assistant dashboards.

## Installation

1. Install [HACS](https://hacs.xyz/)
2. Add this repository to HACS as a custom repository:
   - URL: `https://github.com/yourusername/ha-light-card`
   - Category: `Lovelace`
3. Install the "HA Light Card" from HACS
4. Add the card to your dashboard

## Usage

Add the card to your dashboard with the following configuration:

```yaml
type: custom:ha-light-card
entity: light.your_light_entity
