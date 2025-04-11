<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/" mode="profile">
    Profile detected:
    <xsl:value-of select="//*[contains(@*[local-name()='type'], 'Profile')]/@name"/>
    <!--  Your full profile transformation logic here  -->
  </xsl:template>
</xsl:stylesheet>
