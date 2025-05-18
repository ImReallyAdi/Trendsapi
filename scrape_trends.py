import sys
from pytrends.request import TrendReq
import json

# Get country code from command-line argument, default to 'united_states'
country_arg = sys.argv[1] if len(sys.argv) > 1 else 'united_states'

pytrends = TrendReq(hl='en-US', tz=360)
trending_searches = pytrends.trending_searches(pn=country_arg)

trends = []
for trend in trending_searches[0][:10]:
    trends.append({"title": trend, "url": f"https://www.google.com/search?q={trend.replace(' ', '+')}"})

result = {
    "status": "success",
    "topTen": trends
}

print(json.dumps(result))