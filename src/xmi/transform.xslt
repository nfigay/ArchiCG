<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <!-- Import both transformation modules -->
  <xsl:import href="profile-transform.xsl"/>
  <xsl:import href="model-transform.xsl"/>

  <xsl:template match="/">
    <!-- Load the external XMI -->
    <xsl:variable name="xmi" select="document('dtc-21-12-14.xml')" />

    <!-- Detect and dispatch -->
    <xsl:choose>
      <xsl:when test="$xmi//*[contains(@*[local-name()='type'], 'Profile')]">
        <xsl:apply-templates select="$xmi" mode="profile" />
      </xsl:when>
      <xsl:when test="$xmi//*[contains(@*[local-name()='type'], 'Model')]">
        <xsl:apply-templates select="$xmi" mode="model" />
      </xsl:when>
      <xsl:otherwise>
        Unknown type: cannot dispatch transformation.
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
