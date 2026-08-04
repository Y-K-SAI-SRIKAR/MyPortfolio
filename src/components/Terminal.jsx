import React from 'react';
import styled from 'styled-components';

const Terminal = () => {
  return (
    <StyledWrapper>
      <div className="terminal-container">
        <div className="title-bar">
          <div className="terminal-title">iam.Srikar</div>
          <div className="traffic-lights">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
        </div>
        <div className="terminal-body">
          <div className="line">
            <span className="sep">:</span>
            <span className="path">~</span>
            <span className="dollar">$</span>
            <span className="cmd">decrypt_portfolio.sh</span>
          </div>
          <div className="out green-line line-1">
            <span className="bullet">›</span> initializing portfolio..
          </div>
          <div className="out green-line line-3">
            <span className="bullet">›</span> capabilities loaded
          </div>
          <div className="out green-line line-3">
            <span className="bullet">›</span> caffeine injected
          </div>

          <div className="line">
            <span className="sep">:</span>
            <span className="path">~</span>
            <span className="dollar">$</span>
            <span className="cmd">deploying-creativity</span>
            <span className="caret" aria-hidden="true" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Outer wrapper stays transparent so App.css can position/scale it freely. */
  display: inline-block;
  line-height: 0;

  .terminal-container {
    width: 540px;
    max-width: 540px;
    background: linear-gradient(180deg, #141414 0%, #0a0a0a 100%);
    border: 1px solid #262626;
    border-radius: 14px;
    box-shadow:
      0 36px 90px rgba(0, 0, 0, 0.6),
      0 0 0 1px rgba(255, 255, 255, 0.02) inset,
      0 1px 0 rgba(255, 255, 255, 0.04) inset;
    font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
    color: #d6deeb;
    overflow: hidden;
    background-clip: padding-box;
  }

  /* ----- Title bar ----- */
  .title-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: linear-gradient(180deg, #1f1f1f 0%, #141414 100%);
    border-bottom: 1px solid #262626;
    user-select: none;
  }

  .traffic-lights {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    box-shadow:
      inset 0 0 0 1px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .dot-red {
    background: radial-gradient(circle at 30% 30%, #ff8585, #ef4444 70%, #991b1b);
  }
  .dot-yellow {
    background: radial-gradient(circle at 30% 30%, #fde68a, #eab308 70%, #854d0e);
  }
  .dot-green {
    background: radial-gradient(circle at 30% 30%, #86efac, #22c55e 70%, #166534);
  }

  .terminal-title {
    color: #cbd5e1;
    font-size: 15px;
    letter-spacing: 0.5px;
    font-weight: 600;
    line-height: 1;
    font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  }

  /* ----- Body ----- */
  .terminal-body {
    padding: 22px 22px 24px;
    font-size: 15.5px;
    line-height: 1.6;
  }

  .line {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0;
    color: #d6deeb;
    margin-bottom: 12px;
    font-size: 15px;
  }

  .prompt {
    color: #e5e5e5;
    font-weight: 600;
  }
  .sep {
    color: #6b7280;
    margin: 0 4px;
  }
  .path {
    color: #e5e5e5;
    font-weight: 600;
  }
  .dollar {
    color: #a3a3a3;
    margin: 0 8px 0 6px;
    font-weight: 700;
  }
  .cmd {
    color: #d6deeb;
  }

  .caret {
    display: inline-block;
    width: 9px;
    height: 18px;
    margin-left: 8px;
    background: #ffffff;
    box-shadow: none;
    animation: blink 1s steps(2, end) infinite;
    vertical-align: -3px;
    border-radius: 1px;
  }

  .out {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 12px;
    color: #a3a3a3;
    font-size: 14.5px;
    line-height: 1.55;
  }

  .bullet {
    color: #6b7280;
    width: 14px;
    text-align: center;
    flex-shrink: 0;
  }

  .green-line {
    margin-bottom: 12px;
  }

  .line-1 {
    animation: green-color 3s infinite;
  }
  .line-2 {
    animation: green-color 3.5s infinite;
  }
  .line-3 {
    animation: green-color 2s infinite;
  }

  @keyframes green-color {
    0% { color: #525252; }
    50% { color: #a3a3a3; }
    100% { color: #525252; }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    50.01%, 100% { opacity: 0; }
  }
`;

export default Terminal;
