from dataclasses import dataclass

WEIGHTS={"identification":.35,"impact":.25,"remediation":.25,"tests":.15}

@dataclass(frozen=True)
class ReviewScore:
    identification:float
    impact:float
    remediation:float
    tests:float
    def total(self):
        return round(sum(getattr(self,k)*v for k,v in WEIGHTS.items()),2)

def score(review:dict)->float:
    safe={k:max(0,min(100,float(review.get(k,0)))) for k in WEIGHTS}
    return ReviewScore(**safe).total()
