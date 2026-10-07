from engine.scorer import score

def test_weighted_security_score():
    assert score({"identification":100,"impact":80,"remediation":80,"tests":60}) == 84.0

def test_clamps_values():
    assert score({"identification":200,"impact":100,"remediation":100,"tests":100}) == 100.0
